export type TermsParagraph = {
  text: string
  emphasis?: 'strong' | 'italic'
}

export type TermsSection = {
  title: string
  paragraphs: TermsParagraph[]
}

export const termsMeta = {
  releaseDate: 'August 21, 2026',
  effectiveDate: 'August 21, 2026',
}

export const termsIntroduction: TermsParagraph[] = [
  {
    text: 'Welcome to the Scene Score AI Drama Leaderboard (the “Leaderboard”), a service operated by Hong Kong Artificial Intelligence Visual Limited, a company incorporated in Hong Kong SAR (“we”, “us”, “our” or the “Operator”).',
  },
  {
    text: 'The Leaderboard lets creators upload AI-generated animated short-drama works (“AI Dramas”) to enter competitions, rankings and showcases. When you submit a work to the Leaderboard, that work — together with the assets and metadata you supply — will be published and made publicly viewable online, and may be used by us and by the public as described in these Terms. Please read Sections 4 (Your Submissions & Licence), 5 (AI-Generated Content) and 6 (Competition) carefully before you upload anything.',
    emphasis: 'strong',
  },
  {
    text: 'By accessing or using the Leaderboard, you agree to be bound by these Terms of Use, our Privacy Policy and any additional rules we publish for a specific competition (together, this “Agreement”). If you do not agree, do not use the Leaderboard.',
  },
  {
    text: 'For provisions that materially affect your rights, we have used bold text to draw your attention.',
  },
]

export const termsSections: TermsSection[] = [
  {
    title: '1. Eligibility and Acceptance',
    paragraphs: [
      { text: '(a) Age. The Leaderboard is intended for persons aged 18 or above, or the age of majority in your jurisdiction. If you are under 18, you may only use the Leaderboard with the verifiable consent of a parent or legal guardian, who agrees to be bound by this Agreement on your behalf.' },
      { text: '(b) Capacity. By using the Leaderboard you confirm you can enter into a binding contract with us and that all information you provide is true, accurate and complete.' },
      { text: '(c) Acceptance. You accept this Agreement by accessing or using the Leaderboard or by uploading any Submission. We may amend this Agreement from time to time; material changes will be notified to you (e.g. by in-app notice or email) and continued use after the effective date constitutes acceptance.' },
    ],
  },
  {
    title: '2. The Leaderboard Service',
    paragraphs: [
      { text: '(a) What we provide. We provide a platform to upload, publicly display, rank and showcase AI Dramas, and to browse and interact with works submitted by others.' },
      { text: '(b) Availability. The Leaderboard is provided on an “as is” and “as available” basis. We may change, suspend or discontinue all or part of the service, or any competition, at any time.' },
      { text: '(c) Public nature of the service. You understand that the Leaderboard is a public showcase. Any Submission you upload, and your creator name/handle, may be viewed, streamed, shared and voted on by any member of the public and may be indexed by search engines.', emphasis: 'strong' },
    ],
  },
  {
    title: '3. Accounts',
    paragraphs: [
      { text: '(a) You may need to register an account to submit works. You are responsible for the security of your account and for all activity under it. Notify us immediately of any unauthorised use.' },
      { text: '(b) You must provide accurate registration information and keep it current. We may suspend or terminate accounts that breach this Agreement, infringe third-party rights, or that we reasonably believe are used fraudulently.' },
    ],
  },
  {
    title: '4. Your Submissions and Licence to Us',
    paragraphs: [
      { text: '(a) Definition. “Submission” means any AI Drama, video, image, audio, text, title, description, thumbnail, metadata or other content you upload, post or transmit to or through the Leaderboard.' },
      { text: '(b) You keep ownership. Subject to any third-party rights in pre-existing material, you retain whatever ownership rights you hold in your Submission. Submitting a work does not transfer ownership to us.', emphasis: 'strong' },
      { text: '(c) Licence you grant to us. By uploading a Submission, you grant us and our affiliates a worldwide, non-exclusive, royalty-free, sublicensable and transferable licence, for the duration of the applicable intellectual property rights, to:', emphasis: 'strong' },
      { text: '(i) host, store, reproduce, publicly display, publicly perform, communicate to the public, stream, and make your Submission available online through the Leaderboard and its official channels;', emphasis: 'strong' },
      { text: '(ii) use, reproduce and display your Submission, your creator name/handle and, where you have provided them, associated images, to operate, promote, market and advertise the Leaderboard, the relevant competition and the results (including on our owned social media and in press/marketing materials); and', emphasis: 'strong' },
      { text: '(iii) create thumbnails, previews, excerpts, compilations and format/technical adaptations of your Submission strictly as reasonably necessary to display, transmit and promote it on and for the Leaderboard.', emphasis: 'strong' },
      { text: '(d) Scope limits. This licence is granted for the purposes of operating, showcasing and promoting the Leaderboard and its competitions. It does not grant us the right to sell your Submission as a standalone product, or to licence it to unrelated third parties for their own commercial products, unless you separately agree (for example, under specific Contest Rules for a prize-winning work).' },
      { text: '(e) Attribution and moral rights. We will use commercially reasonable efforts to display your creator name/handle with your Submission. To the extent permitted by law, and only as necessary to exercise the licence in (c), you consent to acts that might otherwise infringe your moral rights (e.g. cropping for thumbnails, format adaptation); nothing here requires us to make derogatory use of your work.' },
      { text: '(f) No obligation / removal. We do not pre-screen Submissions but may, in our sole discretion and without liability, refuse, remove, disqualify, block or delete any Submission that we consider breaches this Agreement, infringes third-party rights, or is Objectionable Content (Section 7).' },
      { text: '(g) No compensation. Except for any prize expressly offered under a specific competition, you are not entitled to any payment for your Submission or for our permitted use of it, even if we derive revenue or goodwill from operating the Leaderboard.' },
    ],
  },
  {
    title: '5. AI-Generated Content — Representations and Responsibilities',
    paragraphs: [
      { text: 'Because Submissions are AI-generated, the following apply in addition to Section 4. You represent, warrant and agree that:', emphasis: 'strong' },
      { text: '(a) Rights in inputs. You own or have obtained all necessary rights, licences and permissions for every input used to create your Submission, including prompts, source images, characters, scripts, music, voices, likenesses and any reference or training material you supplied or fine-tuned on.' },
      { text: "(b) Rights in outputs. You have all rights necessary to grant the licence in Section 4(c). You are solely responsible if the AI tool's output reproduces or is substantially similar to third-party copyrighted works, trademarks, or a real person's name, image, voice or likeness.", emphasis: 'strong' },
      { text: "(c) Tool compliance. Your use of any generative-AI tool, model or service to create the Submission complied with that tool's own terms of service and licence (including any restrictions on commercial use, on outputs, and on redistribution)." },
      { text: '(d) AI disclosure / labelling. You agree that your Submission may be labelled as AI-generated on the Leaderboard, and you will not remove or obscure any such label. You will not misrepresent AI-generated content as human-created where a competition rule requires disclosure, and you will comply with any applicable AI-content labelling or transparency requirements.' },
      { text: '(e) No warranty of protectability by us. You acknowledge that the copyright status of AI-generated output is uncertain and varies by jurisdiction, and that a work generated with little or no human authorship may not attract copyright protection at all. We make no representation that your Submission is protectable, and we are not responsible if third parties use a Submission that turns out to be unprotected.', emphasis: 'strong' },
      { text: "(f) Deepfakes and likeness. Your Submission must not depict a real, identifiable person (including public figures) in a manner that is deceptive, defamatory, sexual, or that infringes privacy or publicity rights, without that person's consent." },
      { text: "(g) Personal data in inputs. If your Submission or its inputs contain any personal data of a third party (e.g. a real person's face or voice), you confirm you have a lawful basis under the PDPO (and any other applicable data-protection law) to use it and to grant the licence in Section 4." },
    ],
  },
  {
    title: '6. Competition, Ranking and Voting',
    paragraphs: [
      { text: 'The specific mechanics of each competition (entry period, eligibility, judging criteria, voting method, ranking algorithm, prizes and their tax treatment, disqualification rules) will be set out in separate Contest Rules published for that competition and incorporated into this Agreement by reference. In case of conflict, the Contest Rules govern for that competition.', emphasis: 'italic' },
      { text: '(a) Fair play. You must not manipulate rankings or voting, including by using bots, fake accounts, purchased votes, vote exchanges or any automated or deceptive means. We may disqualify any Submission or account we reasonably believe has engaged in such conduct.' },
      { text: "(b) Our discretion. Rankings, scoring and eligibility decisions are made in our (or our judges') sole discretion. We may add, change, suspend or cancel any competition, ranking or reward at any time, and our decision on all competition matters is final.", emphasis: 'strong' },
    ],
  },
  {
    title: '7. Acceptable Use and Objectionable Content',
    paragraphs: [
      { text: '(a) You must not upload, post or transmit any Submission or content that:' },
      { text: '(1) infringes any copyright, trademark, patent, trade secret, privacy, publicity or other right;' },
      { text: '(2) is defamatory, obscene, pornographic, sexually exploitative, hateful, harassing, discriminatory, or that incites violence;' },
      { text: '(3) harms minors in any way, including any child sexual abuse material or content that endangers children;' },
      { text: '(4) is unlawful, threatens public order or national security, or promotes illegal activity;' },
      { text: '(5) is false or misleading, impersonates any person, or misrepresents your affiliation;' },
      { text: "(6) contains malware or any code intended to disrupt or gain unauthorised access to the Leaderboard or others' systems;" },
      { text: '(collectively, “Objectionable Content”, as we may determine in our sole discretion).' },
      { text: "(b) You must not: attempt to gain unauthorised access to the service or other users' accounts; scrape, mirror, frame or embed the service or other users' Submissions without our consent; reverse engineer the platform; interfere with its operation; use the service for unsolicited commercial messages; or solicit other users' personal data." },
      { text: '(c) Reporting. You can report Objectionable Content or infringement via email. We may, but are not obliged to, act on reports.' },
    ],
  },
  {
    title: '8. Intellectual Property in the Platform',
    paragraphs: [
      { text: 'All software, design, trademarks, logos and content we provide (excluding Submissions) are owned by us or our licensors. We grant you a limited, revocable, non-exclusive, non-transferable licence to access and use the Leaderboard for your personal, non-commercial use in accordance with this Agreement. All rights not expressly granted are reserved.' },
    ],
  },
  {
    title: '9. Copyright Infringement Notices',
    paragraphs: [
      { text: '(a) If you believe a Submission infringes your intellectual property, send a written notice to our contact in Section 15 including: identification of the work infringed; identification and location of the infringing material; your contact details; a statement of good-faith belief that the use is unauthorised; and a statement that the information is accurate and that you are authorised to act for the rights owner.' },
      { text: '(b) We may remove or disable access to material we believe in good faith to be infringing, and may terminate the accounts of repeat infringers.' },
      { text: '(c) The uploader may submit a counter-notice; we may reinstate content in accordance with our takedown/counter-notice process. Knowingly making a material misrepresentation in a notice or counter-notice may expose you to liability.' },
    ],
  },
  {
    title: '10. Personal Data (PDPO)',
    paragraphs: [
      { text: '(a) Our collection and use of your personal data is governed by our Privacy Policy, which forms part of this Agreement and is designed to comply with the Personal Data (Privacy) Ordinance (Cap. 486).' },
      { text: "(b) Third-party personal data in Submissions. If your Submission contains another person's personal data, you are the party responsible for ensuring a lawful basis to collect, use and publish that data. You agree to indemnify us for claims arising from your inclusion of third-party personal data without proper consent or lawful basis (see Section 12)." },
      { text: '(c) Public display consequences. You acknowledge that any personal data you include in a public Submission (including your own creator name/handle) will be publicly accessible and outside our practical control once distributed.' },
    ],
  },
  {
    title: '11. Disclaimers and Limitation of Liability',
    paragraphs: [
      { text: 'To the fullest extent permitted by law:', emphasis: 'italic' },
      { text: '(a) The Leaderboard and all content are provided “as is” and “as available” without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, non-infringement, accuracy or availability.' },
      { text: '(b) We are not responsible for Submissions or conduct of other users, or for any content that is inaccurate, offensive, infringing or otherwise objectionable. You use the Leaderboard and view Submissions at your own risk.', emphasis: 'strong' },
      { text: '(c) We are not liable for any indirect, incidental, special, consequential or punitive damages, or for lost profits, data or goodwill. Our total aggregate liability to you arising out of or relating to this Agreement or the Leaderboard is limited to the greater of the amounts you have paid us (if any) in the 12 months before the claim and HK$1,000.', emphasis: 'strong' },
      { text: '(d) Nothing in this Agreement excludes or limits liability that cannot be excluded or limited under applicable law (e.g. liability for death or personal injury caused by negligence, or for fraud).' },
    ],
  },
  {
    title: '12. Indemnity',
    paragraphs: [
      { text: 'To the fullest extent permitted by law, you agree to indemnify and hold harmless the Operator, its affiliates and their officers, employees and agents from any claims, losses, liabilities and reasonable legal costs arising from: (a) your breach of this Agreement; (b) your Submission, including any allegation that it, its inputs or its AI-generated outputs infringe or misappropriate any third-party right or contain unlawful third-party personal data; or (c) your use of the Leaderboard.' },
    ],
  },
  {
    title: '13. Term and Termination',
    paragraphs: [
      { text: '(a) This Agreement applies from your first use until terminated. You may stop using the Leaderboard and close your account at any time.' },
      { text: '(b) We may suspend or terminate your access at any time for breach of this Agreement, infringement of third-party rights, or as otherwise reasonably necessary.' },
      { text: '(c) The showcase licence you granted in Section 4(c) survives termination to the extent needed for us to keep displaying and promoting past competitions and results, and to retain archival copies. Sections 4–5, 7–12 and 14–15 survive termination.', emphasis: 'strong' },
    ],
  },
  {
    title: '14. Governing Law and Dispute Resolution',
    paragraphs: [
      { text: '(a) This Agreement is governed by the laws of the Hong Kong Special Administrative Region.' },
      { text: '(b) Any dispute arising out of or in connection with this Agreement shall be referred to and finally resolved by arbitration administered by the Hong Kong International Arbitration Centre (HKIAC) under the HKIAC Administered Arbitration Rules in force when the Notice of Arbitration is submitted. The seat shall be Hong Kong; the tribunal shall consist of three arbitrators; the language shall be English.' },
    ],
  },
  {
    title: '15. Miscellaneous and Contact',
    paragraphs: [
      { text: '(a) Entire agreement / severability / waiver / assignment. This Agreement (with the Privacy Policy and any Contest Rules) is the entire agreement between you and us on its subject matter. If any provision is held invalid, the rest remains in effect. Our failure to enforce a provision is not a waiver. You may not assign this Agreement without our consent; we may assign it freely.' },
      { text: '(b) Contact.' },
      { text: 'Operator: Hong Kong Artificial Intelligence Visual Limited' },
      { text: 'Email: [SUPPORT / LEGAL EMAIL]' },
    ],
  },
]
