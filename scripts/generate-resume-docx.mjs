import {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  TabStopPosition, TabStopType, BorderStyle, convertInchesToTwip,
  ShadingType,
} from 'docx';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const COLORS = {
  black: '111111',
  dark: '222222',
  body: '333333',
  muted: '555555',
  light: '777777',
  line: 'DDDDDD',
};

const FONT = 'Calibri';
const PT = (n) => n * 2;

function divider() {
  return new Paragraph({
    spacing: { before: PT(10), after: PT(7) },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.line },
    },
  });
}

function sectionTitle(text) {
  return new Paragraph({
    spacing: { after: PT(5) },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        font: FONT,
        size: PT(10),
        bold: true,
        color: COLORS.dark,
        characterSpacing: 60,
      }),
    ],
  });
}

function bullet(text) {
  return new Paragraph({
    spacing: { after: PT(3) },
    indent: { left: convertInchesToTwip(0.25), hanging: convertInchesToTwip(0.15) },
    children: [
      new TextRun({ text: '•  ', font: FONT, size: PT(9.5), color: COLORS.muted }),
      new TextRun({ text, font: FONT, size: PT(9.5), color: COLORS.body }),
    ],
  });
}

function roleHeader(title, extra, date) {
  const children = [
    new TextRun({ text: title, font: FONT, size: PT(10), bold: true, color: COLORS.dark }),
  ];
  if (extra) {
    children.push(new TextRun({ text: `  ${extra}`, font: FONT, size: PT(8.5), color: COLORS.light }));
  }
  children.push(new TextRun({ text: `\t${date}`, font: FONT, size: PT(9), color: COLORS.muted }));
  return new Paragraph({
    spacing: { before: PT(4), after: PT(3) },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children,
  });
}

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: FONT, size: PT(10), color: COLORS.body },
        paragraph: { spacing: { line: 276 } },
      },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: {
          top: convertInchesToTwip(0.6),
          bottom: convertInchesToTwip(0.5),
          left: convertInchesToTwip(0.65),
          right: convertInchesToTwip(0.65),
        },
      },
    },
    children: [
      // HEADER
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: PT(2) },
        children: [
          new TextRun({ text: 'Ujjwal Varsney', font: FONT, size: PT(22), bold: true, color: COLORS.black }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: PT(4) },
        children: [
          new TextRun({ text: 'Senior UX Designer | Product Designer', font: FONT, size: PT(11), color: COLORS.muted }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: PT(2) },
        children: [
          new TextRun({
            text: '+91 87096 22128  |  ujjwalvarsney@gmail.com  |  www.varsney.com  |  linkedin.com/in/ujjwalvarsney',
            font: FONT, size: PT(9), color: COLORS.muted,
          }),
        ],
      }),

      // SUMMARY
      divider(),
      sectionTitle('Summary'),
      new Paragraph({
        spacing: { after: PT(2) },
        children: [
          new TextRun({
            text: 'Senior UX Designer with 5+ years designing enterprise SaaS products across 12+ industries - healthcare, manufacturing, automation, pharma, agriculture, education, and logistics. I build AI-integrated design workflows and scalable design systems that turn complex operational tools into products people actually use. Recognized for measurable business impact and 100% client satisfaction (CSAT) across 6 quarters.',
            font: FONT, size: PT(10), color: COLORS.body,
          }),
        ],
      }),

      // SKILLS
      divider(),
      sectionTitle('Skills'),
      ...[
        ['Research and Design', 'User Research, Usability Testing, A/B Testing, User Flows, Wireframing, Prototyping (Lo-fi and Hi-fi), Interaction Design, Visual Design, Information Architecture, Journey Mapping, Responsive Design, User-Centered Design (UCD), Design Systems, Design Tokens, Design Ops, Storyboarding, Accessibility (WCAG 2.2), Design Thinking'],
        ['AI and Emerging Tech', 'AI-Assisted UX, Agentic Design Workflows, Figma AI, Figma Make, Claude (Anthropic), Conversational UX, LLM Design Patterns, Prompt Engineering for Design, Data-Informed Design'],
        ['Tools', 'Figma, Figma Dev Mode, Sketch, Adobe XD, Adobe Creative Cloud, Zeplin, Miro, Hotjar, Maze, Pendo, Google Analytics (GA4), Jira'],
        ['Platforms', 'Web, iOS, Android'],
        ['Process and Leadership', 'Agile and Scrum, Stakeholder Management, Design Strategy, Product Strategy, OKRs, North Star Metrics, Competitive Analysis, Mentorship, Cross-Functional Collaboration, Design Critique, Front-End Literacy (HTML and CSS)'],
      ].map(([label, value]) =>
        new Paragraph({
          spacing: { after: PT(3) },
          children: [
            new TextRun({ text: `${label}: `, font: FONT, size: PT(9.5), bold: true, color: COLORS.dark }),
            new TextRun({ text: value, font: FONT, size: PT(9.5), color: COLORS.muted }),
          ],
        })
      ),

      // EXPERIENCE
      divider(),
      sectionTitle('Experience'),

      // CES
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
        spacing: { after: PT(1) },
        children: [
          new TextRun({ text: 'CES', font: FONT, size: PT(10.5), bold: true, color: COLORS.dark }),
          new TextRun({ text: '\tChennai, TN', font: FONT, size: PT(9.5), color: COLORS.muted }),
        ],
      }),
      new Paragraph({
        spacing: { after: PT(4) },
        children: [
          new TextRun({ text: 'Enterprise Software Consultancy, 1500+ employees', font: FONT, size: PT(9), color: COLORS.light }),
        ],
      }),

      roleHeader('Senior UX Designer', 'Promoted from UX Designer', 'Mar 2023 - Present'),
      bullet('Led design strategy for enterprise platforms, internal dashboards, and operational systems across 12+ domains (healthcare, manufacturing, automation, pharma, agriculture, education, logistics) serving 20k+ end-users, driving a 65% increase in user satisfaction scores.'),
      bullet('Built and scaled a proprietary AI design workflow using Claude, Figma AI, and custom prompt pipelines that automates user flow generation, component QA, and WCAG 2.2 accessibility audits, reducing design iteration cycles by 3x across all active projects.'),
      bullet('Owned a cross-platform design system (85+ components, 360+ design tokens), cutting component design time by 20% and enforcing visual design consistency across web, iOS, and Android.'),
      bullet('Drove stakeholder alignment with product managers and engineering leads through Agile and Scrum ceremonies, mapping OKRs to UX outcomes and earning 100% CSAT across 6 quarters spanning multiple projects.'),
      bullet('Mentored 6 junior designers (direct reports) on user research methods, design thinking, design critique, and client communication.'),
      bullet('Led cross-functional collaboration with marketing and engineering on POCs, competitive analysis for new product opportunities, and UX onboarding for incoming projects. Championed responsive design and accessibility (WCAG 2.2) across all deliverables.'),

      roleHeader('UX Designer', null, 'Jul 2022 - Mar 2023'),
      bullet('Designed B2B and consumer-facing applications (mobile and web) across 25+ projects, improving usability and adoption through user-centered design, A/B testing, and iterative prototyping.'),
      bullet('Ran usability testing, user interviews, heuristic evaluations, and journey mapping using Hotjar and Maze, translating findings into data-informed design decisions that reduced user onboarding drop-offs by 12%.'),
      bullet('Built information architecture diagrams and onboarding flows for complex enterprise workflows, applying design thinking to simplify multi-step processes into intuitive experiences.'),
      bullet('Partnered with front-end engineers via Figma Dev Mode to ensure pixel-perfect handoff and design fidelity across iOS, Android, and web.'),

      // Innovative Technologies
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
        spacing: { before: PT(8), after: PT(1) },
        children: [
          new TextRun({ text: 'Innovative Technologies', font: FONT, size: PT(10.5), bold: true, color: COLORS.dark }),
          new TextRun({ text: '\tPatna', font: FONT, size: PT(9.5), color: COLORS.muted }),
        ],
      }),
      roleHeader('UI/UX Designer', null, 'Nov 2020 - Jan 2022'),
      bullet('Designed MVPs, prototypes, and interaction flows for responsive web and mobile platforms, presenting to stakeholders to align cross-functional teams and accelerate go-to-market decisions.'),
      bullet('Established visual design standards and usability benchmarks across responsive web and mobile products for early-stage clients.'),

      // Shark Realty
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
        spacing: { before: PT(8), after: PT(1) },
        children: [
          new TextRun({ text: 'Shark Realty', font: FONT, size: PT(10.5), bold: true, color: COLORS.dark }),
          new TextRun({ text: '\tPatna', font: FONT, size: PT(9.5), color: COLORS.muted }),
        ],
      }),
      roleHeader('Graphic Designer', null, 'Mar 2020 - Nov 2020'),
      bullet('Created brand identity systems, marketing visuals, and social media content supporting multi-channel campaign launches.'),

      // CERTIFICATIONS
      divider(),
      sectionTitle('Certifications'),
      ...[
        ['AI for Designers', 'IxDF (2026)'],
        ['Design Psychology', 'LinkedIn Learning (2024)'],
        ['Enterprise Design Thinking Practitioner', 'IBM (2024)'],
        ['Accessibility for UX (WCAG 2.2)', 'Udemy (2023)'],
        ['Google UX Design Specialization', 'Google (2021)'],
      ].map(([name, org]) =>
        new Paragraph({
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          spacing: { after: PT(2) },
          children: [
            new TextRun({ text: name, font: FONT, size: PT(9.5), color: COLORS.body }),
            new TextRun({ text: `\t${org}`, font: FONT, size: PT(9), color: COLORS.light }),
          ],
        })
      ),

      // EDUCATION
      divider(),
      sectionTitle('Education'),
      new Paragraph({
        spacing: { after: PT(1) },
        children: [
          new TextRun({ text: 'BSc in Information Technology', font: FONT, size: PT(9.5), bold: true, color: COLORS.dark }),
        ],
      }),
      new Paragraph({
        spacing: { after: PT(2) },
        children: [
          new TextRun({ text: 'Sikkim Manipal University, Gangtok | 2017 - 2021', font: FONT, size: PT(9.5), color: COLORS.muted }),
        ],
      }),

      // AWARDS
      divider(),
      sectionTitle('Awards'),
      new Paragraph({
        spacing: { after: PT(2) },
        children: [
          new TextRun({ text: '100% Client Satisfaction (CSAT)', font: FONT, size: PT(9.5), bold: true, color: COLORS.dark }),
          new TextRun({ text: ' - 6 quarters across multiple projects | CES', font: FONT, size: PT(9.5), color: COLORS.muted }),
        ],
      }),
      new Paragraph({
        spacing: { after: PT(2) },
        children: [
          new TextRun({ text: 'Client Champ Award', font: FONT, size: PT(9.5), bold: true, color: COLORS.dark }),
          new TextRun({ text: ' - Recognized by CES Practice Head | Oct 2023', font: FONT, size: PT(9.5), color: COLORS.muted }),
        ],
      }),
    ],
  }],
});

const buffer = await Packer.toBuffer(doc);
const outputPath = resolve(__dirname, '../public/resume/Ujjwal_Varsney_SeniorUXDesigner.docx');
writeFileSync(outputPath, buffer);
console.log('DOCX generated:', outputPath);
