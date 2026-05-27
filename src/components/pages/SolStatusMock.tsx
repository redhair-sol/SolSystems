import { AlertTriangle, Check } from "lucide-react";

// Fake, language-aware mock of the SolStatus UI. No real customer/incident data.
// Rendered as a light-theme "screenshot" framed inside the dark product page.
type Loc = "el" | "en";
type Kind = "incidents" | "initiatives" | "maintenance";

const T = {
  el: {
    signIn: "Σύνδεση",
    banner: "2 ενεργές βλάβες",
    activeHeading: "ΕΝΕΡΓΕΣ ΒΛΑΒΕΣ",
    sevCritical: "Κρίσιμη",
    sevMajor: "Σημαντική",
    inProgress: "Σε εξέλιξη",
    resolved: "Επιλύθηκε",
    incidents: [
      {
        title: "Διακοπή στο σύστημα email",
        meta: "Πελάτης Α · Από 10:46",
        desc: "Σε εξέλιξη η αποκατάσταση από την ομάδα υποστήριξης.",
        ts: "Σήμερα 10:51",
        sev: "critical" as const,
      },
      {
        title: "Καθυστερήσεις στην εφαρμογή αδειών",
        meta: "Πελάτης Β · Από χθες 11:31",
        desc: "Εντοπίστηκε η αιτία, εφαρμόζεται διόρθωση.",
        ts: "Σήμερα 12:05",
        sev: "major" as const,
      },
    ],
    historyHeading: "ΠΡΟΣΦΑΤΟ ΙΣΤΟΡΙΚΟ",
    history: ["Αργή απόκριση web server · Επιλύθηκε · 26/05", "Αποκατάσταση σύνδεσης VPN · Επιλύθηκε · 25/05"],
    lastUpdate: "Τελευταία ενημέρωση: 12:08",
    // module mocks
    incidentMini: { title: "Διακοπή στο σύστημα email", sev: "Κρίσιμη", status: "Σε εξέλιξη" },
    initiative: { title: "Αναβάθμιση συστημάτων", progress: "3 / 5 εγκαταστάσεις", pct: 60 },
    maintenance: { title: "Προγραμματισμένη συντήρηση", window: "Κυριακή 02:00 - 04:00", note: "Σύντομη μη διαθεσιμότητα" },
  },
  en: {
    signIn: "Sign in",
    banner: "2 active incidents",
    activeHeading: "ACTIVE INCIDENTS",
    sevCritical: "Critical",
    sevMajor: "Major",
    inProgress: "In progress",
    resolved: "Resolved",
    incidents: [
      {
        title: "Email system outage",
        meta: "Client A · Since 10:46",
        desc: "Recovery in progress by the support team.",
        ts: "Today 10:51",
        sev: "critical" as const,
      },
      {
        title: "Delays in the leave application",
        meta: "Client B · Since yesterday 11:31",
        desc: "Cause identified, a fix is being applied.",
        ts: "Today 12:05",
        sev: "major" as const,
      },
    ],
    historyHeading: "RECENT HISTORY",
    history: ["Slow web server response · Resolved · 26/05", "VPN connection restored · Resolved · 25/05"],
    lastUpdate: "Last updated: 12:08",
    incidentMini: { title: "Email system outage", sev: "Critical", status: "In progress" },
    initiative: { title: "Systems upgrade", progress: "3 / 5 installations", pct: 60 },
    maintenance: { title: "Scheduled maintenance", window: "Sunday 02:00 - 04:00", note: "Brief unavailability" },
  },
};

// Real SolStatus logo, copied verbatim from the app (SolStatus.Web/wwwroot/img/logo.png).
function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src="/images/solstatus/logo.png" alt="SolStatus" className={className} decoding="async" />;
}

const sevPill: Record<"critical" | "major", string> = {
  critical: "bg-red-50 text-red-600",
  major: "bg-amber-50 text-amber-700",
};
const sevBorder: Record<"critical" | "major", string> = {
  critical: "border-l-red-500",
  major: "border-l-amber-400",
};

export function SolStatusHeroMock({ locale }: { locale: Loc }) {
  const t = T[locale];
  return (
    <div className="bg-white text-slate-900">
      {/* top bar: logo left, sign-in right, aligned to the content's edges */}
      <div className="border-b border-slate-100">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Logo className="h-10 w-auto" />
          <span className="text-sm text-slate-500">{t.signIn}</span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8">
        {/* banner */}
        <div className="mb-6 flex items-center gap-2 rounded-lg border border-red-100 bg-red-50/70 px-4 py-3">
          <AlertTriangle size={16} className="text-red-600" />
          <span className="text-sm font-semibold text-red-700">{t.banner}</span>
        </div>

        {/* active incidents */}
        <p className="mb-3 text-[10px] font-semibold tracking-wider text-slate-400">{t.activeHeading}</p>
        <div className="space-y-3">
          {t.incidents.map((inc) => (
            <div key={inc.title} className={`rounded-lg border border-slate-100 border-l-4 ${sevBorder[inc.sev]} bg-white px-4 py-3 shadow-sm`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <AlertTriangle size={13} className="text-slate-400" />
                  <span className="text-sm font-semibold text-slate-800">{inc.title}</span>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${sevPill[inc.sev]}`}>
                    {inc.sev === "critical" ? t.sevCritical : t.sevMajor}
                  </span>
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">{t.inProgress}</span>
                </div>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">{inc.meta}</p>
              <p className="mt-1.5 text-xs text-slate-600">{inc.desc}</p>
              <p className="mt-1 text-[10px] text-slate-400">{inc.ts}</p>
            </div>
          ))}
        </div>

        {/* history */}
        <p className="mb-2 mt-6 text-[10px] font-semibold tracking-wider text-slate-400">{t.historyHeading}</p>
        <div className="space-y-1.5">
          {t.history.map((h) => (
            <div key={h} className="flex items-center gap-2 text-xs text-slate-600">
              <Check size={13} className="text-emerald-600" />
              {h}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[10px] text-slate-300">{t.lastUpdate}</p>
      </div>
    </div>
  );
}

export function SolStatusModuleMock({ locale, kind }: { locale: Loc; kind: Kind }) {
  const t = T[locale];
  return (
    <div className="flex h-full min-h-[200px] flex-col bg-white px-5 py-4 text-slate-900">
      <div className="mb-4 flex items-center border-b border-slate-100 pb-2.5">
        <Logo className="h-7 w-auto" />
      </div>

      {kind === "incidents" && (
        <div className="rounded-lg border border-slate-100 border-l-4 border-l-red-500 bg-white px-3 py-2.5 shadow-sm">
          <div className="flex items-center gap-1.5">
            <AlertTriangle size={12} className="text-slate-400" />
            <span className="text-xs font-semibold text-slate-800">{t.incidentMini.title}</span>
          </div>
          <div className="mt-2 flex gap-1.5">
            <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-medium text-red-600">{t.incidentMini.sev}</span>
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">{t.incidentMini.status}</span>
          </div>
        </div>
      )}

      {kind === "initiatives" && (
        <div className="rounded-lg border border-slate-100 bg-white px-3 py-2.5 shadow-sm">
          <span className="text-xs font-semibold text-slate-800">{t.initiative.title}</span>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-teal-500" style={{ width: `${t.initiative.pct}%` }} />
          </div>
          <p className="mt-2 text-[11px] text-slate-500">{t.initiative.progress}</p>
        </div>
      )}

      {kind === "maintenance" && (
        <div className="rounded-lg border border-slate-100 border-l-4 border-l-sky-400 bg-white px-3 py-2.5 shadow-sm">
          <span className="text-xs font-semibold text-slate-800">{t.maintenance.title}</span>
          <p className="mt-2 text-[11px] font-medium text-sky-600">{t.maintenance.window}</p>
          <p className="mt-1 text-[11px] text-slate-500">{t.maintenance.note}</p>
        </div>
      )}
    </div>
  );
}
