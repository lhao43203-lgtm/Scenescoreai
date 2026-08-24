export type MethodologyLanguage = 'zh-TW' | 'en'

export type ScoreBand = {
  range: string
  label: string
  description: string
}

export type ScoreDimension = {
  id: string
  number: string
  title: string
  score: number
  description: string
  criteria: string[]
}

export type MethodologyContent = {
  meta: {
    mark: string
    scale: string
    title: string
    summaryLabel: string
    totalScore: number
    pointsUnit: string
  }
  navigation: Array<{ href: string; label: string }>
  overview: {
    kicker: string
    title: string
    paragraphs: string[]
    principlesTitle: string
    principles: string[]
  }
  bands: {
    kicker: string
    title: string
    intro: string
    items: ScoreBand[]
  }
  organization: {
    kicker: string
    title: string
    points: string[]
    formulaLabel: string
    formula: string
    tieTitle: string
    tieBreakers: string[]
  }
  dimensions: {
    kicker: string
    title: string
    intro: string
    criteriaLabel: string
    expandLabel: string
    collapseLabel: string
    items: ScoreDimension[]
  }
  eligibility: {
    kicker: string
    title: string
    intro: string
    points: string[]
  }
  deductions: {
    kicker: string
    title: string
    points: string[]
  }
  returnToRanking: string
}

const traditional: MethodologyContent = {
  meta: {
    mark: 'SCENE SCORE / 技術側評分規則',
    scale: 'TECHNICAL REVIEW / 50 POINTS',
    title: 'AI 短劇 Leaderboard 技術側評分規則',
    summaryLabel: '技術側滿分',
    totalScore: 50,
    pointsUnit: '分',
  },
  navigation: [
    { href: '#method-overview', label: '概要與總則' },
    { href: '#method-bands', label: '評分等級' },
    { href: '#method-organization', label: '評審組織' },
    { href: '#method-dimensions', label: '五個評分維度' },
    { href: '#method-eligibility', label: '資格審核門檻' },
    { href: '#method-deductions', label: '扣分或降級機制' },
  ],
  overview: {
    kicker: '01 / OVERVIEW',
    title: '概要與評分總則',
    paragraphs: [
      '本文僅說明 AI 短劇 Leaderboard 中技術側評審相關的評分規則與材料要求。',
      '技術側評審重點關注作品背後的 AI 創作方法、Workflow 設計、生成品質控制、可復現性、角色／風格一致性，以及劇本到成片的執行效果。',
    ],
    principlesTitle: '評分總則',
    principles: [
      '本文僅定義技術與 Workflow 評審部分，技術側滿分 50 分。',
      '技術側重點評估 AI 在短劇創作中的實際參與方式、Workflow 完整性、生成品質控制、角色／風格一致性、可復現性與規模化潛力。',
    ],
  },
  bands: {
    kicker: '02 / SCORE BANDS',
    title: '評分等級建議',
    intro: '技術側分數按照以下五個區間形成推薦結論。',
    items: [
      { range: '45–50', label: '技術側強推薦', description: 'Workflow 與成片執行均具備示範意義。' },
      { range: '40–44', label: '技術側推薦', description: '整體完成度較高，存在明確技術亮點。' },
      { range: '35–39', label: '技術側候選', description: '部分維度突出，但完整度或穩定性仍有短板。' },
      { range: '30–34', label: '觀察樣本', description: '可作為觀察樣本，不建議作為技術側重點推薦作品。' },
      { range: '30 分以下', label: '不建議推薦', description: '不建議進入技術側推薦名單。' },
    ],
  },
  organization: {
    kicker: '03 / REVIEW PROCESS',
    title: '技術側評審組織建議',
    points: [
      '每部作品建議至少由 2 名技術評審獨立打分。',
      '技術評審應分別給出分項分數、簡要評語、是否技術側推薦、是否建議參與技術相關單項獎評議等意見。',
    ],
    formulaLabel: '計分公式',
    formula: '技術側得分 = 技術評審分數平均值',
    tieTitle: '同分排序',
    tieBreakers: [
      'Workflow 完整性與可解釋性得分更高者優先。',
      '一致性與品質控制能力得分更高者優先。',
      '劇本到成片的執行一致性得分更高者優先。',
      '仍無法區分時，進入技術複審討論。',
    ],
  },
  dimensions: {
    kicker: '04 / TECHNICAL & WORKFLOW',
    title: '技術與 Workflow 評審規則',
    intro: '五個維度合計 50 分。每個維度均以實際材料、生成過程與最終成片為依據。',
    criteriaLabel: '評分要點',
    expandLabel: '展開完整評分要點',
    collapseLabel: '收起完整評分要點',
    items: [
      {
        id: 'ai-participation',
        number: '01',
        title: 'AI 參與度與實質貢獻',
        score: 5,
        description: '考察 AI 是否在劇本生成、角色設計、分鏡、影片生成、聲音、剪輯、後期等關鍵環節產生實質貢獻，而不是僅在局部素材或包裝層面輕度使用。',
        criteria: [
          'AI 參與環節清晰可說明。',
          'AI 對最終作品有可辨識貢獻。',
          '人工與 AI 的分工合理。',
          '不誇大 AI 貢獻。',
          '能說明關鍵人工干預的原因。',
        ],
      },
      {
        id: 'workflow',
        number: '02',
        title: 'Workflow 完整性與可解釋性',
        score: 10,
        description: '考察參賽方是否能夠清楚說明從創意、劇本、角色、分鏡、影片生成、音訊到後期合成的完整流程，並描述每一步的輸入、操作、輸出、工具、模型、版本和關鍵參數。',
        criteria: [
          '流程鏈路完整。',
          '每一步輸入、操作、輸出清楚。',
          '工具、模型、版本和關鍵參數記錄充分。',
          '關鍵設計選擇有解釋。',
          '能定位品質問題發生在哪個環節。',
        ],
      },
      {
        id: 'storyboard-prompts',
        number: '03',
        title: '分鏡與提示詞設計能力',
        score: 10,
        description: '考察參賽方是否能夠將劇本內容準確拆解為可執行的鏡頭方案，並透過結構化提示詞或控制條件，把角色、場景、動作、構圖、運鏡、光影、情緒和畫面風格轉化為模型可執行的生成指令。本維度主要評估設計階段的拆解、表達和迭代能力，不直接以最終成片品質作為主要依據；成片執行效果在第 4 項評審。',
        criteria: [
          '能夠依據劇情、人物關係和情緒變化合理拆分鏡頭，鏡頭數量、景別和時長安排與敘事需求匹配。',
          '分鏡中對人物、場景、動作、構圖、景別、機位、運鏡、光影和情緒等要素描述清楚。',
          '提示詞結構完整、表達準確，能夠將劇本和分鏡要求轉化為模型可執行的生成指令。',
          '能夠在提示詞或控制條件層面設計角色設定詞、場景約束詞、風格詞、參考圖等一致性方案。',
          '能根據不同模型、不同鏡頭類型和生成結果，對提示詞及參數進行針對性調整，而非機械套用固定模板。',
          '能說明分鏡設計、提示詞內容與目標畫面或代表性生成結果之間的對應關係。',
          '對生成偏差、畫面衝突、動作錯誤或敘事不清等問題，具備提示詞迭代、參數調整、鏡頭重構或局部修正能力。',
        ],
      },
      {
        id: 'execution-consistency',
        number: '04',
        title: '劇本到成片的執行一致性',
        score: 15,
        description: '考察作品在多集、多鏡頭、多模態生成過程中的成果穩定性，以及成片對劇本、分鏡和鏡頭表的執行準確度。該維度重點判斷參賽方是否能夠穩定地把文本設定、角色設定和敘事意圖轉化為連續、可觀看、可追溯的最終成片，並透過質檢、重新生成、修復或人工校驗機制控制成片品質。本維度主要評估最終視聽結果與品質控制閉環，區別於第 3 項的分鏡和提示詞設計能力。',
        criteria: [
          '成片中的角色形象、服裝、場景、美術風格在跨鏡頭、跨集情況下保持穩定。',
          '動作、鏡頭銜接、時序關係和情節推進具有連續性。',
          '聲音、口型、字幕、旁白與畫面內容基本匹配。',
          '成片情節與劇本、分鏡或鏡頭表保持一致，關鍵鏡頭沒有明顯缺失、錯位或誤讀。',
          '台詞、字幕、旁白與劇本文本匹配，關鍵情緒點被有效呈現。',
          '有明確的質檢、重新生成、修復或人工校驗機制。',
          '能基於成片時間碼、截圖或驗收記錄，說明文本設定、分鏡設計與最終視聽表達之間的對應關係。',
        ],
      },
      {
        id: 'reproducibility',
        number: '05',
        title: '可復現性與規模化潛力',
        score: 10,
        description: '考察 Workflow 是否可以被複用到更多劇集、更多角色或更多題材中，以及參賽方是否能夠說明其流程在效率、成本、品質穩定性和團隊協作上的可擴展性。',
        criteria: [
          '核心流程可被複用。',
          '輸入、輸出、參數和人工環節記錄清晰。',
          '能說明製作效率、成本和迭代方式。',
          '具備批量生產或系列化擴展潛力。',
          '材料記錄清晰，便於評審核驗、技術複盤或後續技術分析。',
        ],
      },
    ],
  },
  eligibility: {
    kicker: '05 / ELIGIBILITY',
    title: '資格審核門檻',
    intro: '以下項目作為資格審核門檻，不直接計入技術側分數。',
    points: [
      '作品必須為完整短劇或完整短劇樣本，不接受單純預告片、概念片或 Demo 片段進入主榜。',
      '每部作品必須提交成片及對應劇本或腳本文檔。缺少劇本／腳本文檔的作品原則上不進入正式評審。',
      '作品必須說明 AI 使用範圍，不得虛構或誇大 AI 參與度。',
      '作品涉及第三方素材、真人肖像、IP 改編或訓練素材時，需提供足以支持評審判斷的來源或合規說明。',
      '作品不得包含違法、侵權、嚴重倫理風險或明顯違反平台內容規範的內容。',
    ],
  },
  deductions: {
    kicker: '06 / DEDUCTIONS',
    title: '扣分或降級機制',
    points: [
      '材料不完整但可補交：進入一次補充提交流程，逾期未補齊則取消資格或降級為觀察樣本。',
      '劇本與成片明顯不一致：技術側「劇本到成片的執行一致性」扣分。',
      'Workflow 說明過於空泛：技術側「Workflow 完整性與可解釋性」與「可復現性與規模化潛力」扣分。',
      '關鍵來源或合規說明缺失：可參加基礎評審，但最終不會進入榜單。',
    ],
  },
  returnToRanking: '返回排行榜',
}

const english: MethodologyContent = {
  meta: {
    mark: 'SCENE SCORE / TECHNICAL SCORING RULES',
    scale: 'TECHNICAL REVIEW / 50 POINTS',
    title: 'AI Short Drama Leaderboard — Technical Scoring Rules',
    summaryLabel: 'Technical maximum',
    totalScore: 50,
    pointsUnit: 'PTS',
  },
  navigation: [
    { href: '#method-overview', label: 'Overview & principles' },
    { href: '#method-bands', label: 'Score bands' },
    { href: '#method-organization', label: 'Review process' },
    { href: '#method-dimensions', label: 'Five dimensions' },
    { href: '#method-eligibility', label: 'Eligibility threshold' },
    { href: '#method-deductions', label: 'Deductions & downgrade' },
  ],
  overview: {
    kicker: '01 / OVERVIEW',
    title: 'Overview and scoring principles',
    paragraphs: [
      'This document sets out the scoring rules and submission-material requirements for the technical review of the AI Short Drama Leaderboard.',
      'The technical review focuses on the AI creation methods behind each work, Workflow design, generation quality control, reproducibility, character and style consistency, and the execution of the script through to the final production.',
    ],
    principlesTitle: 'Scoring principles',
    principles: [
      'This document defines only the technical and Workflow review. The technical review carries a maximum of 50 points.',
      'The technical review evaluates how AI is actually used in short-drama creation, the completeness of the Workflow, generation quality control, character and style consistency, reproducibility, and the potential to scale.',
    ],
  },
  bands: {
    kicker: '02 / SCORE BANDS',
    title: 'Recommended score bands',
    intro: 'The technical score leads to one of the following five recommendation levels.',
    items: [
      { range: '45–50', label: 'Strong technical recommendation', description: 'Both the Workflow and final execution have exemplary value.' },
      { range: '40–44', label: 'Technical recommendation', description: 'The work has a high overall level of completion and clear technical highlights.' },
      { range: '35–39', label: 'Technical candidate', description: 'Some dimensions are strong, but completeness or stability still has shortcomings.' },
      { range: '30–34', label: 'Observation sample', description: 'The work may be retained as an observation sample but is not recommended as a priority technical selection.' },
      { range: 'Below 30', label: 'Not recommended', description: 'The work is not recommended for the technical shortlist.' },
    ],
  },
  organization: {
    kicker: '03 / REVIEW PROCESS',
    title: 'Technical review organization',
    points: [
      'Each work should be scored independently by at least two technical reviewers.',
      'Each technical reviewer should provide dimension scores, a brief comment, a technical recommendation decision, and an opinion on whether the work should be considered for a technical category award.',
    ],
    formulaLabel: 'Scoring formula',
    formula: 'Technical score = average of the technical reviewers’ scores',
    tieTitle: 'Tie-breaking order',
    tieBreakers: [
      'The work with the higher Workflow Completeness & Explainability score ranks first.',
      'The work with the stronger consistency and quality-control score ranks first.',
      'The work with the higher Script-to-Final Execution Consistency score ranks first.',
      'If the works still cannot be separated, they proceed to a technical review discussion.',
    ],
  },
  dimensions: {
    kicker: '04 / TECHNICAL & WORKFLOW',
    title: 'Technical and Workflow evaluation rules',
    intro: 'The five dimensions total 50 points. Each dimension is evaluated against the submitted evidence, generation process, and final production.',
    criteriaLabel: 'Scoring criteria',
    expandLabel: 'Expand full scoring criteria',
    collapseLabel: 'Collapse full scoring criteria',
    items: [
      {
        id: 'ai-participation',
        number: '01',
        title: 'AI Participation & Substantive Contribution',
        score: 5,
        description: 'Evaluates whether AI makes a substantive contribution to key stages such as script generation, character design, storyboarding, video generation, sound, editing, and post-production, rather than being used lightly for isolated assets or surface-level packaging.',
        criteria: [
          'The stages involving AI are clearly explained.',
          'AI makes an identifiable contribution to the final work.',
          'The division of work between people and AI is reasonable.',
          'The contribution of AI is not overstated.',
          'The reasons for key human interventions are explained.',
        ],
      },
      {
        id: 'workflow',
        number: '02',
        title: 'Workflow Completeness & Explainability',
        score: 10,
        description: 'Evaluates whether the entrant can clearly explain the complete process from concept, script, characters, and storyboards through video generation, audio, and final compositing, including the input, operation, output, tools, models, versions, and key parameters used at every step.',
        criteria: [
          'The end-to-end process is complete.',
          'The input, operation, and output of each step are clear.',
          'Tools, models, versions, and key parameters are documented sufficiently.',
          'Key design choices are explained.',
          'The stage at which a quality problem occurred can be identified.',
        ],
      },
      {
        id: 'storyboard-prompts',
        number: '03',
        title: 'Storyboarding & Prompt Design Capability',
        score: 10,
        description: 'Evaluates whether the entrant can accurately break the script into executable shot plans and use structured prompts or control conditions to translate characters, settings, actions, composition, camera movement, lighting, emotion, and visual style into instructions a model can execute. This dimension primarily evaluates decomposition, expression, and iteration during design; final production quality is assessed under Dimension 4.',
        criteria: [
          'Shots are divided appropriately according to plot, character relationships, and emotional changes, with shot count, framing, and duration matched to narrative needs.',
          'Characters, settings, actions, composition, shot size, camera position, camera movement, lighting, and emotion are described clearly in the storyboard.',
          'Prompts are complete and precise, translating script and storyboard requirements into executable generation instructions.',
          'Character descriptors, setting constraints, style terms, reference images, and other consistency measures are designed at the prompt or control-condition level.',
          'Prompts and parameters are adjusted for different models, shot types, and generation results rather than mechanically reusing a fixed template.',
          'The relationship between storyboard design, prompt content, and the target image or representative generation result can be explained.',
          'Generation drift, visual conflicts, action errors, or unclear storytelling can be addressed through prompt iteration, parameter adjustment, shot restructuring, or local correction.',
        ],
      },
      {
        id: 'execution-consistency',
        number: '04',
        title: 'Script-to-Final Execution Consistency',
        score: 15,
        description: 'Evaluates the stability of results across episodes, shots, and multimodal generation, as well as how accurately the final production executes the script, storyboard, and shot list. It considers whether textual settings, character settings, and narrative intent are consistently translated into a continuous, watchable, and traceable final production, supported by quality inspection, regeneration, repair, or human verification. This dimension evaluates the final audiovisual result and the quality-control loop, distinct from the storyboard and prompt design assessed in Dimension 3.',
        criteria: [
          'Character appearance, costume, setting, and art direction remain stable across shots and episodes.',
          'Actions, shot transitions, temporal relationships, and plot progression remain continuous.',
          'Sound, lip-sync, subtitles, narration, and image content generally match.',
          'The final story remains consistent with the script, storyboard, or shot list, without obvious missing, misplaced, or misinterpreted key shots.',
          'Dialogue, subtitles, and narration match the script, and key emotional beats are expressed effectively.',
          'A clear mechanism exists for quality inspection, regeneration, repair, or human verification.',
          'Timecodes, screenshots, or acceptance records can be used to explain the relationship between textual settings, storyboard design, and final audiovisual expression.',
        ],
      },
      {
        id: 'reproducibility',
        number: '05',
        title: 'Reproducibility & Scalability Potential',
        score: 10,
        description: 'Evaluates whether the Workflow can be reused for more episodes, characters, or genres, and whether the entrant can explain how the process scales in efficiency, cost, quality stability, and team collaboration.',
        criteria: [
          'The core process can be reused.',
          'Inputs, outputs, parameters, and human stages are documented clearly.',
          'Production efficiency, cost, and iteration methods can be explained.',
          'The process has potential for batch production or series expansion.',
          'Materials are documented clearly enough for reviewer verification, technical retrospectives, or subsequent technical analysis.',
        ],
      },
    ],
  },
  eligibility: {
    kicker: '05 / ELIGIBILITY',
    title: 'Eligibility review threshold',
    intro: 'The following requirements are eligibility thresholds and do not directly contribute to the technical score.',
    points: [
      'The entry must be a complete short drama or a complete short-drama sample. A trailer, concept film, or Demo clip alone cannot enter the main leaderboard.',
      'Each work must include the final production and its corresponding script or screenplay document. A work without a script or screenplay will, in principle, not enter formal review.',
      'The entry must disclose the scope of AI use and must not fabricate or exaggerate AI participation.',
      'Where third-party assets, a real person’s likeness, an IP adaptation, or training materials are involved, the entrant must provide source or compliance information sufficient for reviewer assessment.',
      'The work must not contain illegal or infringing content, serious ethical risks, or material that clearly violates platform content standards.',
    ],
  },
  deductions: {
    kicker: '06 / DEDUCTIONS',
    title: 'Deduction or downgrade mechanism',
    points: [
      'Incomplete materials that can be supplemented: one supplementary-submission opportunity will be provided. Failure to complete the materials by the deadline results in disqualification or downgrade to an observation sample.',
      'A clear mismatch between script and final production: points are deducted from Script-to-Final Execution Consistency.',
      'A Workflow description that is too vague: points are deducted from Workflow Completeness & Explainability and Reproducibility & Scalability Potential.',
      'Missing key source or compliance information: the work may enter the basic review but will not ultimately enter the leaderboard.',
    ],
  },
  returnToRanking: 'RETURN TO RANKING',
}

export const methodologyContent: Record<MethodologyLanguage, MethodologyContent> = {
  'zh-TW': traditional,
  en: english,
}
