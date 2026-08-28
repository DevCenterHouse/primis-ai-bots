export interface FlowStep {
  step: number;
  label: string;
  detail: string;
}

export interface BotOutput {
  icon: string;
  label: string;
}

export interface Bot {
  id: string;
  number: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  platform: string;
  teamsUrl?: string;
  flowSteps: FlowStep[];
  outputs: BotOutput[];
  tags: string[];
  accent: string;
}

export const bots: Bot[] = [
  {
    id: "meeting-minutes",
    number: "01",
    category: "Productivity",
    name: "Meeting Minutes Bot",
    tagline: "Up to 5 hours a week. Gone.",
    description:
      "Drafting meeting minutes was costing the IT/PMO team up to 5 hours every week: someone sitting with the transcript, pulling out decisions, formatting action items, sending follow-ups. This bot removes that overhead entirely: it reads the transcript, structures the conversation into a professional MOM document, and saves Word and PDF versions directly to SharePoint.",
    platform: "Copilot Studio + Power Automate",
    teamsUrl: "https://teams.microsoft.com/l/app/?titleId=T_d38cf987-ceb8-fa7f-5f55-9214056a590f",
    flowSteps: [
      {
        step: 1,
        label: "Select a Meeting",
        detail:
          "Calendar meetings are fetched from Outlook and presented in a paginated list: no manual input required.",
      },
      {
        step: 2,
        label: "Transcript Retrieved",
        detail:
          "Teams automatically pulls the meeting transcript. If none exists, the bot prompts for a manual paste.",
      },
      {
        step: 3,
        label: "AI Drafts the MOM",
        detail:
          "An AI model analyzes the transcript and produces a structured MOM: executive summary, decisions, action items, risks, and next steps.",
      },
      {
        step: 4,
        label: "Choose Save Location",
        detail:
          "Save to the default MOM folder or navigate SharePoint to pick a custom directory.",
      },
      {
        step: 5,
        label: "Word + PDF Delivered",
        detail:
          "Both a Word document and a PDF are generated and saved to SharePoint. Direct links provided instantly.",
      },
    ],
    outputs: [
      { icon: "📄", label: "Word Document" },
      { icon: "📑", label: "PDF Report" },
      { icon: "📁", label: "Saved to SharePoint" },
      { icon: "✅", label: "Action Items Logged" },
    ],
    tags: [
      "AI-Generated",
      "Auto Transcript Fetch",
      "Word + PDF Export",
      "SharePoint Integration",
      "Paginated Meeting Picker",
    ],
    accent: "#bdff00",
  },
  {
    id: "business-card",
    number: "02",
    category: "Marketing Operations",
    name: "Business Card Request Bot",
    tagline: "Zero follow-up. Complete data. Every request.",
    description:
      "The marketing inbox was full of back-and-forth: loan officers sending incomplete requests, the team chasing NMLS numbers, headshots, shipping addresses, and card colors across multiple reply threads. Now a Power Automate flow monitors the inbox 24/7, extracts every required field automatically, and only replies when something is actually missing. The team opens SharePoint and finds a complete, structured record ready to act on.",
    platform: "Power Automate",
    flowSteps: [
      {
        step: 1,
        label: "Email Received",
        detail:
          "A loan officer emails the business card request inbox. The flow triggers instantly, around the clock.",
      },
      {
        step: 2,
        label: "Data Extracted",
        detail:
          "The bot parses the email body and signature for name, title, mobile, NMLS, color preference, quantity, shipping address, and headshot preference.",
      },
      {
        step: 3,
        label: "Gaps Detected",
        detail:
          "If any required field is missing, the bot sends a single, precise reply listing exactly what's needed: no back-and-forth.",
      },
      {
        step: 4,
        label: "SharePoint Record Created",
        detail:
          "A complete list item is created in SharePoint with all data structured and ready for the marketing team.",
      },
      {
        step: 5,
        label: "Marketing Team Acts",
        detail:
          "The team opens the SharePoint list and finds everything they need to produce the card: no calls, no emails, no searching.",
      },
    ],
    outputs: [
      { icon: "📋", label: "SharePoint List Item" },
      { icon: "✉️", label: "Auto-Reply for Missing Data" },
      { icon: "⚡", label: "Instant Trigger" },
      { icon: "🗂️", label: "Structured Records" },
    ],
    tags: [
      "Email-Triggered",
      "Smart Data Extraction",
      "Auto-Reply on Gaps",
      "SharePoint Integration",
      "24/7 Monitoring",
    ],
    accent: "#bdff00",
  },
  {
    id: "email-analyzer",
    number: "03",
    category: "Intelligence",
    name: "Group Email Analyzer Bot",
    tagline: "Turn inbox noise into automation intelligence.",
    description:
      "Group mailboxes function as informal work queues: customer requests, approvals, follow-ups, and more arrive daily. Understanding the full pattern of that work usually means manually reading messages, sorting themes, and interviewing process owners. This bot reduces that discovery effort: it analyzes mailbox history, identifies recurring email types and manual hand-offs, and delivers a structured report on where automation would have the most impact.",
    platform: "Copilot Studio + Power Automate",
    teamsUrl: "https://teams.microsoft.com/l/app/?titleId=T_b83de3a6-4e99-7b6b-07ad-6e89efbbf763",
    flowSteps: [
      {
        step: 1,
        label: "Set Scope",
        detail:
          "Specify a date range or a number of recent emails. The bot confirms the inbox and the scope before proceeding.",
      },
      {
        step: 2,
        label: "Confirm & Start",
        detail:
          "A summary card shows the request details: inbox, date range, report destination. One click to start.",
      },
      {
        step: 3,
        label: "AI Scans Inbox",
        detail:
          "The flow retrieves and analyzes emails in the background. No waiting: you can close the chat while it runs.",
      },
      {
        step: 4,
        label: "Automation Opportunities Flagged",
        detail:
          "The AI identifies recurring email types, manual hand-offs, and repetitive requests that are ripe for automation.",
      },
      {
        step: 5,
        label: "Report Delivered",
        detail:
          "A structured analysis report is sent directly to your email: ready to inform the next automation project.",
      },
    ],
    outputs: [
      { icon: "📊", label: "Analysis Report" },
      { icon: "💡", label: "Automation Opportunities" },
      { icon: "📬", label: "Delivered via Email" },
      { icon: "🔄", label: "Runs in Background" },
    ],
    tags: [
      "Date-Range or Count Filters",
      "Background Processing",
      "AI Pattern Recognition",
      "Email Delivery",
      "Scope Confirmation",
    ],
    accent: "#bdff00",
  },
  {
    id: "policy-comparison",
    number: "04",
    category: "Compliance",
    name: "Policy Comparison Bot",
    tagline: "Policy reviews that used to take days. Now take minutes.",
    description:
      "Policy and procedure reviews often require line-by-line comparison across versions: reviewers must determine what changed, whether downstream materials are still aligned, and which changes require approval. This bot addresses two scenarios: comparing versions of a policy to surface every change, and checking whether a procedure aligns with its governing policy. It reads the documents, runs an AI comparison, supports follow-up Q&A, and produces a Word report with everything documented.",
    platform: "Copilot Studio + Power Automate",
    teamsUrl: "https://teams.microsoft.com/l/app/?titleId=T_cf08fa62-c3c4-792c-1df1-57a61f1f59af",
    flowSteps: [
      {
        step: 1,
        label: "Choose Comparison Type",
        detail:
          "Select Policy vs Policy (version comparison) or Policy vs Procedure (compliance check). Two distinct workflows, one interface.",
      },
      {
        step: 2,
        label: "Upload Documents",
        detail:
          "Upload both files directly in Teams. The bot handles parsing: PDFs or Word documents.",
      },
      {
        step: 3,
        label: "AI Extracts & Compares",
        detail:
          "Document content is fully extracted and run through an AI comparison model. For Policy vs Policy, changes, gaps, and compliance risks are identified against regulatory context from Dataverse. For Policy vs Procedure, the bot checks whether the procedure aligns with its governing policy.",
      },
      {
        step: 4,
        label: "Ask Follow-Up Questions",
        detail:
          "Ask anything about the comparison: specific clauses, regulatory implications, enhancement suggestions. The bot maintains full context throughout the session.",
      },
      {
        step: 5,
        label: "Word Report Generated",
        detail:
          "A comprehensive Word document is created covering the comparison results, decisions made, and any enhancement suggestions. Saved to OneDrive.",
      },
    ],
    outputs: [
      { icon: "📝", label: "Word Comparison Report" },
      { icon: "⚖️", label: "Compliance Check" },
      { icon: "💬", label: "Contextual Q&A" },
      {
        icon: "📚",
        label: "Regulatory Context from Dataverse (Policy vs Policy)",
      },
    ],
    tags: [
      "Policy vs Policy",
      "Policy vs Procedure",
      "Regulatory Compliance",
      "Persistent Context Q&A",
      "Word Report Export",
    ],
    accent: "#bdff00",
  },
];
