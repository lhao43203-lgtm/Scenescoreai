export type SceneWork = {
  id: string
  index: string
  year: string
  title: string
  director: string
  rankingTitle: string
  rankingTitleZhHant: string
  rankingDescription: string
  rankingDescriptionZhHant: string
  score: number
  rankingStyle: string
  rankingStyleZhHant: string
  rankingTags: string[]
  rankingTagsZhHant: string[]
  type: string
  status: string
  accent: 'red' | 'blue' | 'gold' | 'green' | 'violet'
  note: string
  image: string
  video: string
}

export const works: SceneWork[] = [
  {
    id: 'sample-film-a',
    index: '01',
    year: '2026',
    title: 'SAMPLE FILM A',
    director: 'Director name',
    rankingTitle: 'The Actress Who Walked Away from the Script',
    rankingTitleZhHant: '影后不接劇本走',
    rankingDescription: 'A retired screen queen is pulled into a fight over a script. Through layered schemes, she climbs back to the top and finds the life she truly wants',
    rankingDescriptionZhHant: '隱退影后意外捲入劇本爭奪，在重重算計中重返巔峰，也重新找回真正想要的人生',
    score: 8.7,
    rankingStyle: 'Showbiz · Comeback Drama',
    rankingStyleZhHant: '娛樂圈・逆襲劇',
    rankingTags: ['Actress', 'Showbiz', 'Reversal', 'Growth'],
    rankingTagsZhHant: ['影后', '娛樂圈', '逆襲', '成長'],
    type: 'Featured',
    status: 'Score pending',
    accent: 'red',
    note: 'A placeholder entry for the first public ranking release.',
    image: '/images/works/work-01.png',
    video: '/media/ranking/work-01.webm',
  },
  {
    id: 'sample-film-b',
    index: '02',
    year: '2026',
    title: 'SAMPLE FILM B',
    director: 'Director name',
    rankingTitle: 'A Guide to Surviving Retirement in the Cold Palace',
    rankingTitleZhHant: '冷宮養老院通關指南',
    rankingDescription: 'Sent to the cold palace, a consort decides to retire in peace, but her wit and talent for human connection lead her down an unexpected road back to power',
    rankingDescriptionZhHant: '被打入冷宮的妃子決定躺平養老，卻憑藉智慧和人情經營，意外走出一條逆襲之路',
    score: 8.2,
    rankingStyle: 'Period · Light Comedy',
    rankingStyleZhHant: '古裝・輕喜劇',
    rankingTags: ['Cold Palace', 'Court Politics', 'Retirement', 'Reversal'],
    rankingTagsZhHant: ['冷宮', '宮鬥', '養老', '逆襲'],
    type: 'Featured',
    status: 'Score pending',
    accent: 'blue',
    note: 'A visual language built around rhythm, atmosphere and restraint.',
    image: '/images/works/work-02.png',
    video: '/media/ranking/work-02.webm',
  },
  {
    id: 'sample-film-c',
    index: '03',
    year: '2025',
    title: 'SAMPLE FILM C',
    director: 'Director name',
    rankingTitle: 'The Hospital Boss Keeps Her Ex Waiting',
    rankingTitleZhHant: '掌舵大醫院，前夫請排隊掛號',
    rankingDescription: 'She moves from behind the scenes to the centre of the medical industry, while the ex who once overlooked her has to take a number and wait',
    rankingDescriptionZhHant: '她從幕後走到醫療行業中心，事業一路開掛，曾經錯過她的前夫只能重新排隊',
    score: 8.5,
    rankingStyle: 'Urban · Workplace Drama',
    rankingStyleZhHant: '都市・職場爽劇',
    rankingTags: ['Medical', 'Workplace', 'Strong Lead', 'Pursuit'],
    rankingTagsZhHant: ['醫療', '職場', '女強', '追妻'],
    type: 'Short Film',
    status: 'Score pending',
    accent: 'gold',
    note: 'A short-form scene awaiting its first verified jury read.',
    image: '/images/works/work-03.png',
    video: '/media/ranking/work-03.webm',
  },
  {
    id: 'sample-film-d',
    index: '04',
    year: '2025',
    title: 'SAMPLE FILM D',
    director: 'Director name',
    rankingTitle: 'Who Knew? I Draft Memorials in the Madhouse',
    rankingTitleZhHant: '誰懂啊！我在瘋人院批奏摺',
    rankingDescription: 'After an accidental journey into a madhouse, she handles the absurd daily routine while using a calm mind to uncover the danger hidden beneath it',
    rankingDescriptionZhHant: '意外穿越進瘋人院，她一邊應對荒誕日常，一邊憑藉冷靜頭腦破解隱藏危機',
    score: 7.9,
    rankingStyle: 'Period · Absurd Comedy',
    rankingStyleZhHant: '古裝・荒誕喜劇',
    rankingTags: ['Time Travel', 'Madhouse', 'Power Games', 'Comedy'],
    rankingTagsZhHant: ['穿越', '瘋人院', '權謀', '喜劇'],
    type: 'Series',
    status: 'Score pending',
    accent: 'green',
    note: 'A series marker reserved for the next curation cycle.',
    image: '/images/works/work-04.png',
    video: '/media/ranking/work-04.webm',
  },
  {
    id: 'sample-film-e',
    index: '05',
    year: '2025',
    title: 'SAMPLE FILM E',
    director: 'Director name',
    rankingTitle: 'The Maxed-Out Player Rebuilds a Tycoon Dating Show',
    rankingTitleZhHant: '滿級大佬重整豪門戀綜',
    rankingDescription: 'A maxed-out player drops into a tycoon dating show and decides to rewrite the rules when old grudges and complicated relationships close in',
    rankingDescriptionZhHant: '滿級玩家空降豪門戀綜，面對複雜關係和舊日恩怨，她決定重新制定遊戲規則',
    score: 8.4,
    rankingStyle: 'Tycoon · Dating Show Drama',
    rankingStyleZhHant: '豪門・戀綜爽劇',
    rankingTags: ['Tycoon', 'Dating Show', 'Rivalry', 'Strong Lead'],
    rankingTagsZhHant: ['豪門', '戀綜', '修羅場', '女強'],
    type: 'Featured',
    status: 'Score pending',
    accent: 'violet',
    note: 'The fifth entry in the current preview dataset.',
    image: '/images/works/work-05.png',
    video: '/media/ranking/work-05.webm',
  },
]

export type Judge = {
  id: string
  name: string
  romanized: string
  role: string
  roleZhHant: string
  headline: string
  headlineZhHant: string
  image: string
  bio: string[]
  bioZhHant: string[]
}

export type JudgeProfileSection = {
  heading: string
  paragraphs: string[]
}

export type AcademicJudge = {
  id: string
  nameZhHant: string
  nameEn: string
  focusZhHant: string
  focusEn: string
  bioZhHant: string
  bioEn: string
  profileZhHant: string[]
  profileEn: string[]
}

const judgeDirectory: Judge[] = [
  {
    id: 'paco-wong',
    name: '黃柏高',
    romanized: 'Paco Wong',
    role: 'Talent Manager / Film Producer',
    roleZhHant: '藝人經理人／電影監製',
    headline: 'Artificial Human Talent Manager',
    headlineZhHant: '金牌電影監製及娛樂產業領袖',
    image: '/images/judges/paco-wong-v3.png',
    bio: [
      'A defining Hong Kong talent manager who helped shape the careers of Danny Chan, George Lam, Sally Yeh, Sammi Cheng, Andy Hui, Miriam Yeung, Leo Ku and Stephy Tang',
      'Across more than half a century in music and film, he has connected Hong Kong artists with the wider Chinese-language entertainment market through an instinct for talent and audience',
    ],
    bioZhHant: [
      '先後在華納唱片、正東唱片及金牌大風等公司出任要職，一手提攜陳百強、林子祥、葉倩文、鄭秀文、許志安、楊千嬅、古巨基、鄧麗欣等多位歌手',
      '從樂壇金牌經理人到電影監製，橫跨音樂與影視兩大產業逾半世紀，以精準的市場直覺聯繫香港藝人與華語娛樂市場',
    ],
  },
  {
    id: 'edmond-wong',
    name: '黃子桓',
    romanized: 'Edmond Wong',
    role: 'Screenwriter / Producer / Executive Producer',
    roleZhHant: '電影編劇／監製／出品人',
    headline: 'Renowned film screenwriter, producer and executive producer',
    headlineZhHant: '著名電影編劇、監製及出品人',
    image: '/images/judges/edmond-wong.jpeg',
    bio: [
      'A leading Hong Kong screenwriter, producer and executive producer with more than twenty years across content development, production execution and market distribution',
      'His work spans action, fantasy and historical productions, including Dragon Tiger Gate, Saving General Yang, The Monkey King and the Ip Man series',
    ],
    bioZhHant: [
      '深耕香港電影業逾二十載，是業界少見能全面貫穿「內容開發、製作執行與市場發行」的全方位領軍人物',
      '作品橫跨動作、奇幻與歷史大作，包括《龍虎門》《忠烈楊家將》《西遊記之大鬧天宮》及《葉問》系列',
    ],
  },
  {
    id: 'bennett-pang',
    name: '彭健新',
    romanized: 'Bennett Pang',
    role: 'Musician / Performer',
    roleZhHant: '音樂人／演員',
    headline: 'The Wynners’ lead guitarist and band anchor',
    headlineZhHant: '殿堂級音樂人',
    image: '/images/judges/bennett-pang-v2.png',
    bio: [
      'The lead guitarist and organising force of The Wynners, a band whose music and screen presence have shaped Hong Kong popular culture for more than half a century',
      'His music includes the theme from Second Class Citizens, A Love Song, Never Say No and the solo albums Sunshine Clearance Sale and Borrowed Dreams',
    ],
    bioZhHant: [
      '作為溫拿樂隊主音結他手及核心籌組人，以音樂、舞台默契與親和力陪伴香港流行文化逾半世紀',
      '音樂作品包括電影《二等良民》主題曲、《一段情》《永不說不》，以及個人專輯《陽光大減價》《借來的美夢》',
    ],
  },
  {
    id: 'ck-chan',
    name: '陳錦強',
    romanized: 'CK Chan',
    role: 'Photographer',
    roleZhHant: '攝影師',
    headline: 'A recorder of light, character and time',
    headlineZhHant: '攝影藝術大師',
    image: '/images/judges/ck-chan.jpeg',
    bio: [
      'A photographer with more than fifteen years of experience, known for independently photographing nominee portraits for the Hong Kong Film Awards over many consecutive years',
      'His practice favours the honest instant over spectacle, turning light, weather, place and personality into images with a quiet documentary pulse',
    ],
    bioZhHant: [
      '從事攝影工作逾十五年，連續多年獨力操刀香港電影金像獎頒獎典禮候選者形象照拍攝，亦曾掌舵台灣金馬獎海報拍攝',
      '他重視人物與當下時間、空間及天氣共同形成的真實瞬間，在商業攝影與影視造星文化之間建立獨特位置',
    ],
  },
  {
    id: 'chen-tai-lee',
    name: '陳大利',
    romanized: 'Chan Tai Lee',
    role: 'Director / Screenwriter',
    roleZhHant: '導演／編劇',
    headline: 'A local storyteller shaped by screenwriting',
    headlineZhHant: '資深電影編劇',
    image: '/images/judges/chen-tai-lee.jpeg',
    bio: [
      'A Hong Kong filmmaker educated in film and television at Hong Kong Baptist University and in cultural studies at the Chinese University of Hong Kong',
      'His writing includes the Ip Man series, The Way We Dance, Twilight of the Warriors: Walled In and Blades of the Guardians: Wind Rises in the Desert',
    ],
    bioZhHant: [
      '畢業於香港浸會大學傳理學院電影電視系及香港中文大學文化研究系碩士課程，由新聞節目導演轉入電影編劇',
      '參與《葉問》系列、《狂舞派》《九龍城寨之圍城》及《鏢人：風起大漠》等作品，並規劃以香港為家的「明天三部曲」',
    ],
  },
]

export const judges: Judge[] = [
  'paco-wong',
  'chen-tai-lee',
  'bennett-pang',
  'edmond-wong',
  'ck-chan',
]
  .map((id) => judgeDirectory.find((judge) => judge.id === id))
  .filter((judge): judge is Judge => Boolean(judge))

export const academicJudges: AcademicJudge[] = [
  {
    id: 'tianrui-zhou',
    nameZhHant: '\u5468\u738b\u6625\u6f8d 博士',
    nameEn: 'Wangchun Zhou PhD',
    focusZhHant: '人工智慧、AGI 與大型語言模型研究員',
    focusEn: 'AGI and large language model researcher',
    bioZhHant: '研究通用人工智慧、智能代理與自然語言處理，並參與大型模型的角色理解與效率研究',
    bioEn: 'Researches AGI, language agents and natural language processing, with work spanning role understanding and model efficiency',
    profileZhHant: [
      '他是人工智慧領域的知名研究人員，目前任職於字節跳動（Bytedance）及 M-A-P 中心，研究核心集中在通用人工智慧（AGI）、大型語言模型（LLM）、智能代理（Language Agents）以及自然語言處理（NLP）',
      '截至目前，他的學術成就斐然，總引用次數已接近 7,000 次，h 指數（h-index）達 44，反映出他在極短時間內產出了大量具備高度影響力的研究成果',
      '他在大型語言模型領域有多項代表作，參與開發的《RoleLLM》旨在提升模型的角色扮演能力，《Agents》框架則為開發自主語言代理提供開源基礎；《BERT-of-Theseus》提出透過模組替換壓縮模型，《BERT loses patience》則探討以提前退出機制實現快速推理',
      '近年來，他的研究觸角進一步延伸至模型評估（如 SuperGPQA）、長文本建模、多模態視覺語言任務（如 X-VLM），以及 AI 安全與風險評估，持續為業界的大模型應用提供關鍵技術支持',
    ],
    profileEn: [
      'A recognised artificial intelligence researcher working with Bytedance and the M-A-P centre, with research spanning artificial general intelligence, large language models, language agents and natural language processing',
      'His work has received nearly 7,000 citations and an h-index of 44, reflecting a sustained record of influential research produced over a relatively short period',
      'His representative language-model work includes RoleLLM for role-playing ability, the open-source Agents framework, BERT-of-Theseus for modular model compression and BERT loses patience for early-exit inference',
      'Recent work extends to model evaluation through SuperGPQA, long-context modelling, multimodal vision-language tasks such as X-VLM and the evaluation of AI safety risks',
    ],
  },
  {
    id: 'ruisong-yuan',
    nameZhHant: '\u8881\u745e\u6ff1 博士',
    nameEn: 'Ruibin Yuan PhD',
    focusZhHant: 'AI 音樂、多模態與音樂資訊檢索學者',
    focusEn: 'AI music and multimodal scholar',
    bioZhHant: '研究音樂生成、音樂資訊檢索與電腦音樂，探索音樂、語音及影像的多模態理解',
    bioEn: 'Studies music generation, music information retrieval and computer music across multimodal understanding',
    profileZhHant: [
      '他是香港科技大學（HKUST）博士生，同時與卡內基梅隆大學（CMU）保持密切學術聯繫，研究核心聚焦於人工智慧、音樂生成、音樂資訊檢索（MIR）及電腦音樂',
      '在學術成就方面，他的論文引用次數已超過 6,000 次，其共同撰寫的《MMMU》基準測試論文曾獲 CVPR 2024 最佳論文提名',
      '在音樂大模型與生成方向，他開發了 ChatMusician、YuE 及 MERT，分別探索 LLM 的音樂理解與生成、長文本音樂生成，以及基於大規模自監督訓練的音樂音頻理解',
      '在評測基準與基礎模型方向，他參與構建 MMMU、CMMMU、MARBLE 等多模態理解與音樂音頻表示評測基準',
      '他亦對 AnyGPT、OmniBench 等統一多模態大模型有重要貢獻，致力於推動 AI 對音樂、語音及影像的深層理解，打破音樂與語言之間的隔閡',
    ],
    profileEn: [
      'A PhD researcher at HKUST with close academic ties to Carnegie Mellon University, focusing on artificial intelligence, music generation, music information retrieval and computer music',
      'His work has received more than 6,000 citations, and the MMMU benchmark paper he co-authored was nominated for the CVPR 2024 Best Paper Award',
      'His music-model work includes ChatMusician for language-model music understanding and generation, YuE for long-context music generation and MERT for self-supervised music-audio understanding',
      'He has helped build influential multimodal and music-audio benchmarks including MMMU, CMMMU and MARBLE',
      'His contributions to unified multimodal models such as AnyGPT and OmniBench connect music, speech and vision, helping general-purpose models develop more professional musical understanding and creation',
    ],
  },
  {
    id: 'ziyang-ma',
    nameZhHant: '馬子陽 博士',
    nameEn: 'Ziyang Ma PhD',
    focusZhHant: '語音、語言與多模態學習研究員',
    focusEn: 'Senior researcher at Shanghai Jiao Tong University',
    bioZhHant: '現為上海交通大學研究人員，專注於語音語言模型、自監督學習與多模態學習',
    bioEn: 'A Shanghai Jiao Tong University researcher working on speech-language models, self-supervised learning and multimodal systems',
    profileZhHant: [
      '他是一位活躍於人工智慧與音訊處理領域的資深研究人員，現為上海交通大學研究人員，研究核心聚焦於語音與語言處理、語音語言模型、自監督學習以及多模態學習',
      '他的 Google Scholar 引用次數已超過 4,700 次，h 指數（h-index）達到 33，展現出在音訊理解、生成與複雜推理方向的持續影響力',
      '他參與了 Qwen-omni、FunAudioLLM、CosyVoice、F5-TTS 及 emotion2vec 等重量級 AI 專案，研究成果頻繁發表於 AAAI、ACL、NeurIPS 及 ICASSP 等國際頂級會議',
      '他不僅推動語音技術與大語言模型的深度融合，也為開源社區提供多項具備實際應用價值的基準與模型工具',
    ],
    profileEn: [
      'A senior researcher at Shanghai Jiao Tong University working across speech and language processing, speech-language models, self-supervised learning and multimodal learning',
      'With more than 4,700 Google Scholar citations and an h-index of 33, his work has made a sustained impact on audio understanding, generation and complex reasoning',
      'He has contributed to major projects including Qwen-omni, FunAudioLLM, CosyVoice, F5-TTS and emotion2vec, with research published at AAAI, ACL, NeurIPS and ICASSP',
      'His work brings speech technology into closer conversation with large language models while contributing practical benchmarks and model tools to the open-source community',
    ],
  },
  {
    id: 'jiaheng-liu',
    nameZhHant: '劉佳恒 博士',
    nameEn: 'Jiaheng Liu PhD',
    focusZhHant: '大型語言模型與角色扮演研究員',
    focusEn: 'Nanjing University and M-A-P research collaborator',
    bioZhHant: '與南京大學及 M-A-P 開源社區保持學術聯繫，研究模型蒸餾、長文本建模與角色扮演能力',
    bioEn: 'A researcher connected with Nanjing University and M-A-P, focused on distillation, long-context modelling and role-playing',
    profileZhHant: [
      '他是一位專注於人工智慧領域的前沿研究者，目前主要與南京大學（NJU）及 M-A-P 開源社區保持緊密學術聯繫，研究核心聚焦大型語言模型、多模態大模型、模型蒸餾、長文本建模以及角色扮演能力增強',
      '截至 2026 年 5 月，他的論文總引用次數已超過 6,100 次，h 指數（h-index）達 37，並曾於 ICCV、CVPR、NeurIPS、ACL 及 ICLR 發表多篇高質量論文',
      '其代表作包括早期知識蒸餾研究《Correlation Congruence for Knowledge Distillation》，以及近期的《RoleLLM》與《MT-Bench-101》，後者為評估大模型多輪對話中的細粒度表現提供重要基準',
      '他亦積極參與開源社區與產業協作，合作夥伴涵蓋字節跳動、阿里巴巴、快手及上海 AI Lab，並在自動化數據科學（AutoKaggle）與代碼大模型（OpenCoder）等實際場景貢獻關鍵技術',
    ],
    profileEn: [
      'A frontier AI researcher connected with Nanjing University and the M-A-P open-source community, focusing on large language models, multimodal models, knowledge distillation, long-context modelling and role-playing',
      'As of May 2026, his work has received more than 6,100 citations and an h-index of 37, with publications at ICCV, CVPR, NeurIPS, ACL and ICLR',
      'His representative work includes Correlation Congruence for Knowledge Distillation, RoleLLM and MT-Bench-101, a benchmark for fine-grained evaluation of multi-turn dialogue',
      'He also works across open-source and industry collaboration with partners including Bytedance, Alibaba, Kuaishou and Shanghai AI Lab, contributing to AutoKaggle and the OpenCoder code model',
    ],
  },
  {
    id: 'yexin-liu',
    nameZhHant: '劉業鑫 博士',
    nameEn: 'Yexin Liu PhD',
    focusZhHant: '生成式 AI、多模態模型與計算機視覺研究員',
    focusEn: 'AI PhD researcher',
    bioZhHant: '深耕生成式 AI、影片生成與計算機視覺，具備從數據、模型到訓練微調的完整工程經驗',
    bioEn: 'A generative AI and computer vision researcher with end-to-end experience across data, models and training',
    profileZhHant: [
      '他目前就讀於香港科技大學 AI 博士學位，深耕生成式 AI、多模態大模型（MLLM）及計算機視覺；他先後於湖南大學取得機械工程碩士學位，並在香港科技大學（廣州）取得 AI 碩士學位，曾多次獲得國家級獎學金及數學競賽獎項',
      '在研究與實作方面，他已在 CVPR、ICCV、NeurIPS、IEEE TMI 等頂級國際會議與期刊發表多篇論文，展現紮實的學術產出與研究能力',
      '他曾於 Everlyn 擔任首席研究員，帶領團隊進行影片生成技術研發、數據管理與模型訓練協調，具備跨研究與工程團隊的技術領導力',
      '他是開源項目 OmniGen2 的核心貢獻者，並在影片擴散模型、音訊驅動說話人臉合成及醫療影像分析等領域取得重要突破',
      '他精通 Python、PyTorch 及 TensorFlow，具備從數據採集、模型架構設計到預訓練與微調的全流程開發經驗',
      '他把深厚的理論基礎與工程實踐能力結合，持續推動下一代多模態智慧技術的發展',
    ],
    profileEn: [
      'An AI PhD researcher at HKUST focused on generative AI, multimodal large language models and computer vision, with master’s degrees in mechanical engineering from Hunan University and AI from HKUST Guangzhou, plus national scholarships and mathematics awards',
      'He has published across leading venues including CVPR, ICCV, NeurIPS and IEEE TMI, building a strong record of academic output in multimodal and visual intelligence',
      'As a former chief researcher at Everlyn, he led video-generation research, data management and model-training coordination across research and engineering teams',
      'He is a core contributor to the open-source OmniGen2 project and has advanced video diffusion, audio-driven talking-face synthesis and medical image analysis',
      'His practical toolkit includes Python, PyTorch and TensorFlow, with end-to-end experience from data collection and model design through pre-training and fine-tuning',
      'He combines deep theoretical training with strong engineering practice to advance the next generation of multimodal intelligence',
    ],
  },
]

export const judgeProfilesZhHant: Record<string, JudgeProfileSection[]> = {
  'paco-wong': [
    {
      heading: '黃柏高先生 | 升級的經紀人 Artificial Human Talent Manager',
      paragraphs: [
        '黃柏高先生（Paco Wong），先後在華納唱片、正東唱片及金牌大風等公司出任要職，一手提攜陳百強、林子祥、葉倩文、鄭秀文、許志安、楊千嬅、古巨基、鄧麗欣等多位歌手，令「多謝Paco」成為香港頒獎禮上的經典名句，故有「金牌經理人」之稱。2012年，他加盟太陽娛樂文化出任董事總經理直到2020年，將事業版圖由唱片跨足至電影投資製作，展現他點石成金的市場眼光。',
      ],
    },
    {
      heading: '從《殺破狼》到吳京、張晉的星途推手',
      paragraphs: [
        '黃柏高在太陽娛樂任內大力投資超過數十部電影，包括《狂舞派》《逃出生天》《賭城風雲》《掃毒》等，其中最具代表性的是主導投資《殺破狼》系列及《貪狼》等硬派動作大片，成功打造叫好叫座的口碑。他更是吳京走紅的關鍵推手——吳京當年憑《殺破狼》獲Paco力薦入行，其後在《殺破狼II》發布會上公開感激「特別感謝當年Paco一手提攜」，該片內地票房逾5.6億元，讓吳京與張晉一同躋身動作片一線男星之列。',
      ],
    },
    {
      heading: '離開太陽娛樂後未忘初心的電影夢',
      paragraphs: [
        '2020年太陽娛樂減產後，Paco創立新公司「天狼星影業娛樂」重新出發，並在2025年公開表示仍有目標未完成，包括推動動作電影發展及發掘新一代動作演員。從樂壇金牌經理人到電影監製，黃柏高橫跨音樂與影視兩大產業逾半世紀，現以虛擬藝人經理人身份，以精準的市場直覺，成為聯繫香港藝人與華語娛樂市場的重要橋樑。',
      ],
    },
  ],
  'edmond-wong': [
    {
      heading: '黃子桓 | 著名電影編劇、監製及出品人',
      paragraphs: [
        '香港著名電影編劇、監製及出品人。深耕香港電影業逾二十載，是業界少見能全面貫穿「內容開發、製作執行與市場發行」的全方位領軍人物。',
        '其編劇功底深厚，精準掌握大型商業電影的市場脈動。筆下作品橫跨動作、奇幻與歷史大作，包括《龍虎門》、《忠烈楊家將》及《西遊記之大鬧天宮》，而《葉問》系列更屢破全球票房紀錄，印證了其打造國際級華語IP的卓越實力。',
        '憑藉敏銳的商業觸覺，他其後成功跨足監製領域。除了操刀《葉問外傳：張天志》與溫情之作《一路瞳行》外，更一手策劃《逃獄兄弟》四部曲，成功建立起具備高度商業延續性的原創系列IP。近期新作《誤判》更突破類型框架，攜手甄子丹首創「律政武打」新類型，以法庭角力交織硬派動作，為香港動作電影開闢全新格局。',
        '他多年來遊走於創作與製作之間，憑藉對故事獨有的觸覺與對市場精準的判斷，不但驅使他不斷創新，更全力栽培新晉導演與編劇，持續為香港電影產業注入新力量與新價值，是推動華語類型片穩健前行的重要幕後力量。',
      ],
    },
  ],
  'bennett-pang': [
    {
      heading: '彭健新先生 | 溫拿樂隊的靈魂主音結他手',
      paragraphs: [
        '彭健新先生（Bennett Pang），是溫拿樂隊（The Wynners）的主音結他手，更是這支樂隊由「Loosers」過渡到「Wynners」時期的核心籌組人，隊內暱稱「健哥」「OK仔」，樂迷更視他為樂隊的精神支柱。溫拿五虎——譚詠麟、鍾鎮濤、彭健新、陳友及葉智強——自成軍以來屹立華語樂壇逾半世紀，1988年憑《千載不變》成為首隊獲頒「金針獎」的樂隊，並保持紅館開騷場數最多紀錄，於2023年正式舉行告別演唱會，為半世紀的樂隊生涯畫上圓滿句號。',
      ],
    },
    {
      heading: '從歌壇跨足銀幕的親民笑匠',
      paragraphs: [
        '彭健新的影壇生涯與溫拿的成長緊密相連，早期在《大家樂》、《溫拿與教授》及《追趕跑跳碰》等青春歌舞片中，以憨厚幽默的形象將樂隊的活力轉化為銀幕符號。1981年他主演《二等良民》，並親自演唱同名主題曲，歌詞「人生又似苦海裏浮沉」道盡基層市民自嘲又豁達的心境，成為他個人的代表作之一。他日後在《廣東五虎之鐵拳無敵孫中山》及《兄弟班》等作品中延續喜劇本色，前作更重聚全員溫拿成員，展現彼此間數十年不變的默契。',
      ],
    },
    {
      heading: '音樂代表作品',
      paragraphs: [
        '除獎項紀錄外，彭健新亦留下多首膾炙人口的金曲，包括電影《二等良民》主題曲、《表錯七日情》主題曲《一段情》、電視劇《武林聖火令》主題曲《永不說不》（與鍾鎮濤合唱），以及個人專輯《陽光大減價》《借來的美夢》等，橫跨影視配樂與流行唱片兩大領域。',
      ],
    },
  ],
  'ck-chan': [
    {
      heading: '陳錦強先生 | 光影時間的紀錄者',
      paragraphs: [
        '陳錦強先生（CK Chan）從事攝影工作逾十五年，早年隨攝影大師張文華習藝，並擔任其影樓的攝影及監製工作，打下扎實的商業攝影根基。他最廣為人知的成就，是連續多年獨力操刀香港電影金像獎頒獎典禮特刊的候選者形象照拍攝，帶領旗下攝影團隊配合每屆典禮主題，將影帝影后、新晉演員的星光魅力凝聚於鏡頭之下，成為香港電影界最具代表性的「造星攝影師」之一，被譽為「香港殿堂級攝影師」。更連續多年獨力操刀香港電影金像獎頒獎典禮候選者形象照拍攝，亦曾是台灣金馬獎海報拍攝的掌舵人，作品跨越兩岸三地。',
      ],
    },
    {
      heading: '從商業大片到私密婚照',
      paragraphs: [
        '除了電影圈的官方拍攝工作外，CK亦深受明星藝人信賴，親自為藝人熊黛林與丈夫郭可頌操刀婚紗照拍攝，以《葉問》系列為靈感的主題造型系列尤其令人印象深刻，展現他將商業攝影與人物故事結合的敘事能力。他亦跨界與國際品牌合作，例如為名士錶（Baume & Mercier）拍攝主題短片，透過鏡頭詮釋都市職人對時間流逝的感悟，將攝影從靜態肖像延伸至品牌敘事層面。',
      ],
    },
    {
      heading: '捕捉當下而非刻意經營的攝影哲學',
      paragraphs: [
        '不同於強調技術炫技的攝影師，CK在專訪中坦言自己「沒有甚麼攝影理念」，只希望透過照片表達他與當下時間、空間、人物或天氣共同擁有的瞬間，這種返璞歸真的態度反而讓他擅於捕捉人物最自然的神態。從街拍愛好者到獲獎無數的專業攝影師，陳錦強憑藉對「時間與光影」的敏銳觸覺，在香港商業攝影與影視造星產業之間，建立起獨特而具份量的地位。',
      ],
    },
  ],
  'chen-tai-lee': [
    {
      heading: '陳大利導演 | 由編劇到導演的港產本土說書人',
      paragraphs: [
        '陳大利先生（Chan Tai Lee）畢業於香港浸會大學傳理學院電影電視系，及香港中文大學文化研究系碩士課程。早年於電視台任職新聞節目導演，後轉投電影編劇之路，二十餘年來遊走於香港與內地，見證港產片幾番浪潮。他早期以編劇身份參與《葉問》系列、《狂舞派》、《西遊記之大鬧天宮》等電影的劇本創作，練成扎實的敘事功底。',
      ],
    },
    {
      heading: '以香港為家的明天三部曲',
      paragraphs: [
        '2017年，陳大利首次執導個人作品《黃金花》，以一對母子的特殊照顧關係，細膩刻劃香港基層家庭的無奈與堅韌。此作為他帶來第37屆香港電影金像奬新晉導演提名，兩位主演毛舜筠及凌文龍分別奪得最佳女主角及最佳新演員。他以《黃金花》的英文片名”Tomorrow is Another Day”，提煉出「明天」這主題作延續，規劃《明天三部曲》。2025年上映的《拼命三郎》正是第二部曲，將視角由母子關係轉向父子情感，由譚耀文與林家熙演繹跨世代拼搏的江湖故事，把人物命運與香港這座城市的處境緊密扣連。',
      ],
    },
    {
      heading: '編劇底蘊撐起導演視野',
      paragraphs: [
        '即使轉型當上導演，陳大利的編劇本行仍未間斷，近年參與《九龍城寨之圍城》及《鏢人：風起大漠》等大型製作的劇本工作，並憑《鏢人：風起大漠》入圍第38屆大眾電影百花奬最佳編劇提名（編劇創作集體）。從電影系畢業的無名編劇，到憑《黃金花》入圍香港電影金像奬新晉導演，再到積極參與各大中外影展的電影市場研究論壇，陳大利以創作人兼市場觀察者的雙重視角，成為香港電影新一代講述本土故事的重要聲音。',
      ],
    },
  ],
}

export const judgeProfilesEn: Record<string, JudgeProfileSection[]> = {
  'paco-wong': [
    {
      heading: 'Paco Wong | Artificial Human Talent Manager',
      paragraphs: [
        'Paco Wong held senior roles at Warner Music, Cinepoly Records and Gold Typhoon, helping shape the careers of Danny Chan, George Lam, Sally Yeh, Sammi Cheng, Andy Hui, Miriam Yeung, Leo Ku, Stephy Tang and many other artists. “Thank you, Paco” became a familiar line at Hong Kong award ceremonies, earning him the title of “gold-record manager.” In 2012, he joined Sun Entertainment Culture as managing director and remained there until 2020, expanding his work from records into film investment and production.',
      ],
    },
    {
      heading: 'From SPL to the careers of Wu Jing and Zhang Jin',
      paragraphs: [
        'During his time at Sun Entertainment, Wong invested heavily in dozens of films, including The Way We Dance, Out of Inferno, From Vegas to Macau and The White Storm. He is especially associated with the SPL series and Paradox, hard-edged action productions that earned both critical and commercial recognition. He also played a key role in Wu Jing’s rise: after recommending him through SPL, Wu Jing publicly thanked Paco for his early support at the launch of SPL II. The film earned more than RMB 560 million in mainland China and helped establish both Wu Jing and Zhang Jin as leading action stars.',
      ],
    },
    {
      heading: 'Keeping the film dream alive after Sun Entertainment',
      paragraphs: [
        'After Sun Entertainment reduced production in 2020, Wong founded Sirius Film Entertainment and started again. In 2025, he said he still had goals to complete, including advancing action cinema and discovering a new generation of action performers. From gold-record manager to film producer, he has worked across music and screen entertainment for more than half a century. Now acting as a virtual-artist manager, he continues to connect Hong Kong talent with the wider Chinese-language entertainment market through his precise commercial instinct.',
      ],
    },
  ],
  'edmond-wong': [
    {
      heading: 'Edmond Wong | Renowned film screenwriter, producer and executive producer',
      paragraphs: [
        'A renowned Hong Kong screenwriter, producer and executive producer, Edmond Wong has worked in the film industry for more than twenty years. He is one of the few industry leaders whose experience spans content development, production execution and market distribution.',
        'His screenwriting is grounded in a precise understanding of the commercial film market. His work crosses action, fantasy and historical spectacle, including Dragon Tiger Gate, Saving General Yang and The Monkey King. The Ip Man series repeatedly achieved worldwide box-office success, demonstrating his ability to build Chinese-language intellectual property for an international audience.',
        'With a sharp commercial instinct, he later moved successfully into producing. Alongside Master Z: Ip Man Legacy and the warm family drama Sunshine of My Life, he developed the four-film Breakout Brothers series into an original franchise with strong commercial continuity. His recent film The Prosecutor broke new genre ground with Donnie Yen, combining courtroom conflict and hard-edged action to create a new form of legal martial-arts cinema.',
        'Moving between creation and production, Wong pairs a distinctive sense of story with precise market judgement. He continues to innovate while supporting emerging directors and screenwriters, bringing new energy and value to Hong Kong cinema and helping Chinese-language genre film move steadily forward.',
      ],
    },
  ],
  'bennett-pang': [
    {
      heading: 'Bennett Pang | The soul and lead guitarist of The Wynners',
      paragraphs: [
        'Bennett Pang is the lead guitarist of The Wynners and a central organiser in the band’s transition from the Loosers to the Wynners. Known within the group as Kin Gor and OK Chai, he is regarded by fans as one of its spiritual anchors. Alan Tam, Kenny Bee, Bennett Pang, Anthony Chan and Danny Yip have stood together in Chinese-language popular music for more than half a century. In 1988, The Wynners became the first band to receive the Golden Needle Award with Unchanged for a Thousand Years, later setting a record for the most concerts by a band at the Hong Kong Coliseum before holding their farewell concerts in 2023.',
      ],
    },
    {
      heading: 'A familiar comic presence moving from music to film',
      paragraphs: [
        'Pang’s film career grew alongside The Wynners. In early youth musicals including Let’s Rock, The Wynners and the Professor and Chasing, Running, Jumping, Bumping, his warm humour turned the band’s energy into a screen presence. In 1981, he starred in Second Class Citizens and sang its title song, whose lyric about life rising and falling in a bitter sea captured the self-mockery and openness of working people. He later carried that comic character into The Tigers: The Legend of Canton and House of the Rising Sons, with the former reuniting all five members of The Wynners and revealing a chemistry sustained across decades.',
      ],
    },
    {
      heading: 'Representative music',
      paragraphs: [
        'Beyond his awards, Pang has left a catalogue of widely loved songs, including the theme from Second Class Citizens, A Love Song from Let’s Make Laugh, Never Say No from The Sacred Fire and his solo albums Sunshine Clearance Sale and Borrowed Dreams. His work spans both screen music and popular records.',
      ],
    },
  ],
  'ck-chan': [
    {
      heading: 'CK Chan | A recorder of light, character and time',
      paragraphs: [
        'CK Chan has worked as a photographer for more than fifteen years. He trained with master photographer Cheung Man-wah and worked as both photographer and producer in his studio, building a strong foundation in commercial photography. Chan is best known for independently photographing nominee portraits for the Hong Kong Film Awards over many consecutive years. Working with his team around each ceremony’s theme, he brought the presence of leading and emerging performers into the frame and became known as one of Hong Kong cinema’s defining star-making photographers. He has also led poster photography for Taiwan’s Golden Horse Awards, with work spanning Hong Kong, Taiwan and mainland China.',
      ],
    },
    {
      heading: 'From commercial campaigns to intimate wedding portraits',
      paragraphs: [
        'Beyond official film-industry commissions, Chan is trusted by performers and public figures. He photographed the wedding portraits of model and actor Lynn Hung and her husband Ken Kwok, including a memorable series inspired by the Ip Man films, demonstrating his ability to combine commercial photography with personal narrative. He has also worked across disciplines with international brands, including a themed short film for Baume & Mercier that used the camera to interpret an urban professional’s feelings about the passage of time and extended his practice from still portraiture into brand storytelling.',
      ],
    },
    {
      heading: 'A philosophy of capturing the present rather than staging it',
      paragraphs: [
        'Unlike photographers who foreground technical display, Chan has said in interviews that he has “no particular photographic philosophy.” He simply wants a photograph to express the instant shared by himself, the time, the space, the person and even the weather. That unadorned approach helps him capture a subject’s most natural expression. From street-photography enthusiast to an award-winning professional, his sensitivity to time and light has established a distinctive and substantial position between Hong Kong commercial photography and the image-making culture of film and entertainment.',
      ],
    },
  ],
  'chen-tai-lee': [
    {
      heading: 'Chan Tai Lee | A local storyteller shaped by screenwriting',
      paragraphs: [
        'Chan Tai Lee graduated from the Film and Television programme at the Hong Kong Baptist University School of Communication and completed a master’s programme in cultural studies at the Chinese University of Hong Kong. He began as a television news-programme director before moving into screenwriting. Over more than twenty years working between Hong Kong and mainland China, he has witnessed several waves of Hong Kong cinema. His early screenwriting credits include the Ip Man series, The Way We Dance and The Monkey King, through which he developed a strong command of narrative craft.',
      ],
    },
    {
      heading: 'A Tomorrow trilogy rooted in Hong Kong',
      paragraphs: [
        'In 2017, Chan made his solo directing debut with Tomorrow Is Another Day, portraying the frustration and resilience of a working-class Hong Kong family through the relationship between a mother and son with special care needs. The film earned him a nomination for Best New Director at the 37th Hong Kong Film Awards, while Teresa Mo and Ling Man-lung won Best Actress and Best New Performer. Taking the film’s English title as the continuation of a theme, he planned a Tomorrow trilogy. The second film, Fight for Tomorrow, was released in 2025 and shifted from mother and son to father and son, with Patrick Tam and Locker Lam playing out an intergenerational underworld story that ties personal fate closely to the condition of Hong Kong.',
      ],
    },
    {
      heading: 'A screenwriter’s foundation supporting a director’s vision',
      paragraphs: [
        'Even after becoming a director, Chan has continued to write. His recent screenwriting work includes Twilight of the Warriors: Walled In and Blades of the Guardians: Wind Rises in the Desert, with the latter earning a nomination for Best Screenplay at the 38th Hundred Flowers Awards as part of the writing team. From an unknown film-school graduate to a Hong Kong Film Awards Best New Director nominee, and then an active participant in film-market research forums at festivals in China and overseas, Chan brings together the perspectives of a creator and a market observer and has become an important voice in a new generation of Hong Kong filmmakers telling local stories.',
      ],
    },
  ],
}

export const getWork = (id: string) => works.find((work) => work.id === id) ?? works[0]

export const getJudge = (id: string) => judges.find((judge) => judge.id === id)
