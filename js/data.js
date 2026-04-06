// ===== Default N5 Grammar Data =====
const DEFAULT_GRAMMAR = [
  {
    id: 'g1',
    pattern: '〜は〜です',
    level: 'N5',
    meaning: '〜是〜（表示斷定、說明）',
    conjugation: '名詞 + は + 名詞/形容詞 + です',
    examples: [
      { sentence: '私は学生です。', translation: '我是學生。', explanation: '用「は」標記主題，「です」表示斷定語氣' },
      { sentence: 'これは本です。', translation: '這是書。', explanation: '「これ」指示眼前的事物' }
    ]
  },
  {
    id: 'g2',
    pattern: '〜が〜',
    level: 'N5',
    meaning: '表示主語（強調動作的執行者或存在的主體）',
    conjugation: '名詞 + が + 動詞/形容詞',
    examples: [
      { sentence: '犬が走っています。', translation: '狗正在跑。', explanation: '「が」強調是「狗」在跑，而不是別的動物' },
      { sentence: '猫がいます。', translation: '有貓。', explanation: '表示存在，「が」用於存在句的主語' }
    ]
  },
  {
    id: 'g3',
    pattern: '〜を〜',
    level: 'N5',
    meaning: '表示動作的直接受詞（對象）',
    conjugation: '名詞 + を + 他動詞',
    examples: [
      { sentence: 'ご飯を食べます。', translation: '吃飯。', explanation: '「ご飯」是「食べる」的受詞，用「を」連接' },
      { sentence: '水を飲みます。', translation: '喝水。', explanation: '「水」是「飲む」的對象' }
    ]
  },
  {
    id: 'g4',
    pattern: '〜に行く／来る',
    level: 'N5',
    meaning: '去／來某地（表示移動目的地）',
    conjugation: '場所 + に + 行く／来る',
    examples: [
      { sentence: '学校に行きます。', translation: '去學校。', explanation: '「に」表示移動的目的地或方向' },
      { sentence: '家に来てください。', translation: '請來我家。', explanation: '「来る」是從說話者角度移動過來' }
    ]
  },
  {
    id: 'g5',
    pattern: '〜で〜',
    level: 'N5',
    meaning: '在〜（表示動作發生的場所）、用〜（表示手段或工具）',
    conjugation: '場所／手段 + で + 動詞',
    examples: [
      { sentence: '図書館で本を読みます。', translation: '在圖書館讀書。', explanation: '「で」表示動作發生的地點' },
      { sentence: 'バスで学校に行きます。', translation: '搭公車去學校。', explanation: '「で」表示使用的交通工具' }
    ]
  },
  {
    id: 'g6',
    pattern: '〜と〜',
    level: 'N5',
    meaning: '和〜（連接名詞，表示並列或陪同）',
    conjugation: '名詞 + と + 名詞',
    examples: [
      { sentence: '猫と犬が好きです。', translation: '我喜歡貓和狗。', explanation: '「と」連接兩個並列的名詞' },
      { sentence: '友達と映画を見ます。', translation: '和朋友看電影。', explanation: '「と」表示一起做某事的對象' }
    ]
  },
  {
    id: 'g7',
    pattern: '〜の〜',
    level: 'N5',
    meaning: '〜的〜（表示所屬、修飾關係）',
    conjugation: '名詞 + の + 名詞',
    examples: [
      { sentence: '私の本です。', translation: '這是我的書。', explanation: '「の」表示所有關係' },
      { sentence: '日本語の先生です。', translation: '是日語老師。', explanation: '「の」表示修飾，說明哪一種老師' }
    ]
  },
  {
    id: 'g8',
    pattern: '〜ない（否定形）',
    level: 'N5',
    meaning: '不〜（動詞的否定形式）',
    conjugation: 'う動詞：語尾→あ段＋ない　る動詞：語尾去る＋ない',
    examples: [
      { sentence: '肉を食べない。', translation: '不吃肉。', explanation: '「食べる」→「食べない」る動詞的否定形' },
      { sentence: '学校に行かない。', translation: '不去學校。', explanation: '「行く」→「行かない」う動詞的否定形' }
    ]
  },
  {
    id: 'g9',
    pattern: '〜たい',
    level: 'N5',
    meaning: '想做〜（表示說話者的願望、想做某事）',
    conjugation: '動詞ます形語幹 + たい',
    examples: [
      { sentence: '日本に行きたいです。', translation: '我想去日本。', explanation: '「行きます」→語幹「行き」+「たい」' },
      { sentence: '寿司を食べたい。', translation: '想吃壽司。', explanation: '表達自己的欲望，注意只能用於第一人稱' }
    ]
  },
  {
    id: 'g10',
    pattern: '〜てください',
    level: 'N5',
    meaning: '請做〜（禮貌的請求或指示）',
    conjugation: '動詞て形 + ください',
    examples: [
      { sentence: 'ここに座ってください。', translation: '請坐在這裡。', explanation: '「座る」→て形「座って」+「ください」' },
      { sentence: 'ゆっくり話してください。', translation: '請說慢一點。', explanation: '「話す」→て形「話して」+「ください」' }
    ]
  },
  {
    id: 'g11',
    pattern: '〜や〜（など）',
    level: 'N5',
    meaning: '〜和〜等等（部分列舉，暗示還有其他）',
    conjugation: 'N＋や＋N（＋など）',
    detailedConjugation: '名詞＋格助詞ヤ＋名詞（＋副助詞ナド）',
    detail: '「や」用於列舉多個事物中的部分例子，暗示還有其他未提及的事物。使用時通常搭配「など」強調「等等」的概念。',
    comparisons: [
      {
        target: '〜と〜',
        thisNote: '部分列舉：只舉出部分例子，言下之意還有其他沒說出來的事物。常搭配「など」使用。',
        targetNote: '完全列舉：將所有項目全部說出來，沒有隱含其他意思，範圍明確封閉。',
        thisExample: 'バッグの中に財布やスマホなどが入っています。',
        thisTranslation: '包包裡放了錢包和手機等東西。（暗示還有其他東西）',
        targetExample: 'バッグの中に財布とスマホが入っています。',
        targetTranslation: '包包裡放了錢包和手機。（就只有這兩樣）'
      },
      {
        target: '〜も〜も〜',
        thisNote: '列舉部分代表例子，語氣輕鬆，不強調「全部都」，重點在「舉例說明」。',
        targetNote: '強調「兩者都…」，帶有「一個也不例外」的語氣，通常只連接兩項。',
        thisExample: '週末は映画や買い物をします。',
        thisTranslation: '週末做看電影和購物等事情。（還有其他活動）',
        targetExample: '週末は映画も買い物もします。',
        targetTranslation: '週末看電影也購物。（這兩件事都做，語氣較強調）'
      }
    ],
    author: '時雨の町',
    sourceUrl: 'https://www.sigure.tw/learn-japanese/grammar/n5/30',
    examples: [
      { sentence: '机の上に本やノートなどがあります。', translation: '桌上有書和筆記本等東西。', explanation: '「や」部分列舉，「など」強調「等等」，桌上還有其他東西' },
      { sentence: '週末は映画や買い物をします。', translation: '週末做看電影和購物等事情。', explanation: '「や」連接兩個動詞名詞化的活動，暗示還有其他活動' },
      { sentence: 'スーパーで野菜や果物を買いました。', translation: '在超市買了蔬菜和水果之類的東西。', explanation: '「や」表示列舉的是部分，實際購買的可能不只這些' }
    ]
  }
];

// ===== Default N5 Vocabulary Data =====
const DEFAULT_VOCAB = [
  {
    id: 'v1',
    kanji: '犬',
    hiragana: 'いぬ',
    level: 'N5',
    partOfSpeech: '名詞',
    meaning: '狗',
    grammarIds: ['g2', 'g6'],
    examples: [
      { sentence: '私の犬はとても大きいです。', translation: '我的狗非常大。', explanation: '「私の」表示所有，「とても」是「非常」的意思' },
      { sentence: '犬と猫が庭にいます。', translation: '狗和貓在院子裡。', explanation: '「と」連接並列名詞，「に」表示存在地點' }
    ]
  },
  {
    id: 'v2',
    kanji: '猫',
    hiragana: 'ねこ',
    level: 'N5',
    partOfSpeech: '名詞',
    meaning: '貓',
    grammarIds: ['g2', 'g6'],
    examples: [
      { sentence: '猫が好きです。', translation: '我喜歡貓。', explanation: '「が」標記喜歡的對象，「好き」是形容詞' },
      { sentence: '猫はソファで寝ています。', translation: '貓在沙發上睡覺。', explanation: '「で」表示動作發生的地點' }
    ]
  },
  {
    id: 'v3',
    kanji: '水',
    hiragana: 'みず',
    level: 'N5',
    partOfSpeech: '名詞',
    meaning: '水',
    grammarIds: ['g3'],
    examples: [
      { sentence: '水を飲みます。', translation: '喝水。', explanation: '「を」表示飲む的直接受詞' },
      { sentence: '水は大切です。', translation: '水很重要。', explanation: '「は」提示主題，「大切」是形容動詞' }
    ]
  },
  {
    id: 'v4',
    kanji: '山',
    hiragana: 'やま',
    level: 'N5',
    partOfSpeech: '名詞',
    meaning: '山',
    grammarIds: ['g4'],
    examples: [
      { sentence: '山に登りたいです。', translation: '想爬山。', explanation: '「に」表示目標，「〜たい」表示願望' },
      { sentence: 'あの山は高いです。', translation: '那座山很高。', explanation: '「あの」是遠指的指示詞' }
    ]
  },
  {
    id: 'v5',
    kanji: '学校',
    hiragana: 'がっこう',
    level: 'N5',
    partOfSpeech: '名詞',
    meaning: '學校',
    grammarIds: ['g4', 'g5'],
    examples: [
      { sentence: '学校に行きます。', translation: '去學校。', explanation: '「に」表示移動的目的地' },
      { sentence: '学校で勉強します。', translation: '在學校學習。', explanation: '「で」表示動作發生的場所' }
    ]
  },
  {
    id: 'v6',
    kanji: '先生',
    hiragana: 'せんせい',
    level: 'N5',
    partOfSpeech: '名詞',
    meaning: '老師',
    grammarIds: ['g1', 'g7'],
    examples: [
      { sentence: '田中さんは先生です。', translation: '田中先生是老師。', explanation: '「は〜です」句型表示身份' },
      { sentence: '日本語の先生が来ました。', translation: '日語老師來了。', explanation: '「の」修飾名詞，說明是哪種老師' }
    ]
  },
  {
    id: 'v7',
    kanji: '学生',
    hiragana: 'がくせい',
    level: 'N5',
    partOfSpeech: '名詞',
    meaning: '學生',
    grammarIds: ['g1'],
    examples: [
      { sentence: '私は学生です。', translation: '我是學生。', explanation: '「は〜です」的基本用法，說明身份' },
      { sentence: '学生が図書館で勉強しています。', translation: '學生正在圖書館學習。', explanation: '「が」是主語，「で」是場所，「〜ています」是進行式' }
    ]
  },
  {
    id: 'v8',
    kanji: '本',
    hiragana: 'ほん',
    level: 'N5',
    partOfSpeech: '名詞',
    meaning: '書',
    grammarIds: ['g3', 'g7'],
    examples: [
      { sentence: '本を読みます。', translation: '讀書。', explanation: '「を」是讀む的受詞' },
      { sentence: '図書館の本は多いです。', translation: '圖書館的書很多。', explanation: '「の」表示所屬關係' }
    ]
  },
  {
    id: 'v9',
    kanji: '食べる',
    hiragana: 'たべる',
    level: 'N5',
    partOfSpeech: '動詞（る動詞）',
    meaning: '吃',
    grammarIds: ['g3', 'g8', 'g9'],
    examples: [
      { sentence: '朝ご飯を食べます。', translation: '吃早飯。', explanation: '「を」表示受詞，「朝ご飯」是早餐' },
      { sentence: '辛いものを食べたい。', translation: '想吃辣的東西。', explanation: '「〜たい」表示願望，「辛いもの」是辣的東西' }
    ]
  },
  {
    id: 'v10',
    kanji: '飲む',
    hiragana: 'のむ',
    level: 'N5',
    partOfSpeech: '動詞（う動詞）',
    meaning: '喝',
    grammarIds: ['g3', 'g8'],
    examples: [
      { sentence: 'お茶を飲みます。', translation: '喝茶。', explanation: '「お茶」是茶，「を」是受詞助詞' },
      { sentence: 'お酒を飲まない。', translation: '不喝酒。', explanation: '「飲む」→否定形「飲まない」' }
    ]
  },
  {
    id: 'v11',
    kanji: '行く',
    hiragana: 'いく',
    level: 'N5',
    partOfSpeech: '動詞（う動詞）',
    meaning: '去',
    grammarIds: ['g4', 'g9'],
    examples: [
      { sentence: '日本に行きたいです。', translation: '想去日本。', explanation: '「に」表示目的地，「〜たい」表示願望' },
      { sentence: '明日学校に行きません。', translation: '明天不去學校。', explanation: '「ません」是禮貌的否定形式' }
    ]
  },
  {
    id: 'v12',
    kanji: '見る',
    hiragana: 'みる',
    level: 'N5',
    partOfSpeech: '動詞（る動詞）',
    meaning: '看、觀看',
    grammarIds: ['g3', 'g9'],
    examples: [
      { sentence: '映画を見ます。', translation: '看電影。', explanation: '「を」是看的對象' },
      { sentence: 'テレビを見たい。', translation: '想看電視。', explanation: '「〜たい」表示想要做的事' }
    ]
  },
  {
    id: 'v13',
    kanji: '大きい',
    hiragana: 'おおきい',
    level: 'N5',
    partOfSpeech: 'い形容詞',
    meaning: '大的',
    grammarIds: ['g1'],
    examples: [
      { sentence: 'この犬は大きいです。', translation: '這隻狗很大。', explanation: '「この」是近指詞，「は〜です」是斷定句型' },
      { sentence: '大きい声で話してください。', translation: '請用大聲說話。', explanation: '「大きい声」是連體修飾，形容詞直接修飾名詞' }
    ]
  },
  {
    id: 'v14',
    kanji: '小さい',
    hiragana: 'ちいさい',
    level: 'N5',
    partOfSpeech: 'い形容詞',
    meaning: '小的',
    grammarIds: ['g1'],
    examples: [
      { sentence: '私の猫は小さいです。', translation: '我的貓很小。', explanation: '「私の」表示所有，「は〜です」是斷定' },
      { sentence: '小さい声で話す。', translation: '用小聲說話。', explanation: '形容詞直接修飾後面的名詞' }
    ]
  },
  {
    id: 'v15',
    kanji: '新しい',
    hiragana: 'あたらしい',
    level: 'N5',
    partOfSpeech: 'い形容詞',
    meaning: '新的',
    grammarIds: ['g1', 'g7'],
    examples: [
      { sentence: '新しい本を買いました。', translation: '買了新書。', explanation: '形容詞修飾名詞，「を」是受詞' },
      { sentence: 'このスマホは新しいです。', translation: '這支手機是新的。', explanation: '「は〜です」斷定句型' }
    ]
  },
  {
    id: 'v16',
    kanji: '高い',
    hiragana: 'たかい',
    level: 'N5',
    partOfSpeech: 'い形容詞',
    meaning: '貴的、高的',
    grammarIds: ['g1'],
    examples: [
      { sentence: 'このレストランは高いです。', translation: '這家餐廳很貴。', explanation: '表示價格昂貴，「は〜です」斷定句型' },
      { sentence: '富士山は高い山です。', translation: '富士山是高山。', explanation: '形容詞修飾名詞，「は〜です」補充說明' }
    ]
  },
  {
    id: 'v17',
    kanji: '安い',
    hiragana: 'やすい',
    level: 'N5',
    partOfSpeech: 'い形容詞',
    meaning: '便宜的',
    grammarIds: ['g1'],
    examples: [
      { sentence: 'このお店は安いです。', translation: '這家店很便宜。', explanation: '「は〜です」基本斷定句型' },
      { sentence: '安いものを買いたい。', translation: '想買便宜的東西。', explanation: '形容詞修飾「もの」（東西），「〜たい」表示願望' }
    ]
  },
  {
    id: 'v18',
    kanji: '今日',
    hiragana: 'きょう',
    level: 'N5',
    partOfSpeech: '名詞（時間詞）',
    meaning: '今天',
    grammarIds: ['g1', 'g4'],
    examples: [
      { sentence: '今日は学校に行きません。', translation: '今天不去學校。', explanation: '「今日は」提示時間主題，「ません」是否定' },
      { sentence: '今日の天気はいいです。', translation: '今天的天氣很好。', explanation: '「今日の」修飾天氣，「は〜です」斷定' }
    ]
  },
  {
    id: 'v19',
    kanji: '友達',
    hiragana: 'ともだち',
    level: 'N5',
    partOfSpeech: '名詞',
    meaning: '朋友',
    grammarIds: ['g6'],
    examples: [
      { sentence: '友達と映画を見ます。', translation: '和朋友看電影。', explanation: '「と」表示陪同的對象' },
      { sentence: '新しい友達ができました。', translation: '交到了新朋友。', explanation: '「ができる」表示事物的形成、出現' }
    ]
  },
  {
    id: 'v20',
    kanji: '家',
    hiragana: 'いえ／うち',
    level: 'N5',
    partOfSpeech: '名詞',
    meaning: '家（いえ：房子建築；うち：自家）',
    grammarIds: ['g4', 'g5'],
    examples: [
      { sentence: '家に帰ります。', translation: '回家。', explanation: '「に」表示移動目的地，「帰る」是回去的意思' },
      { sentence: '家で料理します。', translation: '在家做料理。', explanation: '「で」表示動作發生的場所' }
    ]
  }
];

// ===== Default Reading Passages =====
const DEFAULT_READINGS = [
  {
    id: 'r1',
    title: '自己紹介',
    level: 'N5',
    description: '田中美咲的自我介紹，包含姓名、職業、興趣的基本表達。',
    grammarIds: ['g1', 'g7', 'g9', 'g6'],
    content: [
      { type: 'text', text: 'はじめまして。私' },
      { type: 'grammar', grammarId: 'g7', text: 'の' },
      { type: 'text', text: '名前' },
      { type: 'grammar', grammarId: 'g7', text: 'は' },
      { type: 'text', text: '田中美咲です。' },
      { type: 'text', text: '私' },
      { type: 'grammar', grammarId: 'g1', text: 'は' },
      { type: 'text', text: '学生' },
      { type: 'grammar', grammarId: 'g1', text: 'です' },
      { type: 'text', text: '。\n\n日本語' },
      { type: 'grammar', grammarId: 'g7', text: 'の' },
      { type: 'text', text: '学校に通っています。毎日、図書館' },
      { type: 'grammar', grammarId: 'g5', text: 'で' },
      { type: 'text', text: '本' },
      { type: 'grammar', grammarId: 'g3', text: 'を' },
      { type: 'text', text: '読みます。\n\n趣味は音楽' },
      { type: 'grammar', grammarId: 'g6', text: 'と' },
      { type: 'text', text: '料理' },
      { type: 'grammar', grammarId: 'g1', text: 'です' },
      { type: 'text', text: '。いつか日本に行き' },
      { type: 'grammar', grammarId: 'g9', text: 'たい' },
      { type: 'text', text: 'です。よろしくお願いします。' }
    ]
  },
  {
    id: 'r2',
    title: '私の一日',
    level: 'N5',
    description: '描述從早晨到晚上的日常生活，使用時間表達和動作描述。',
    grammarIds: ['g3', 'g4', 'g5', 'g6', 'g10'],
    content: [
      { type: 'text', text: '毎朝7時に起きます。まず、朝ご飯' },
      { type: 'grammar', grammarId: 'g3', text: 'を' },
      { type: 'text', text: '食べます。パン' },
      { type: 'grammar', grammarId: 'g6', text: 'と' },
      { type: 'text', text: 'コーヒー' },
      { type: 'grammar', grammarId: 'g6', text: 'と' },
      { type: 'text', text: '牛乳を飲みます。\n\n8時に学校' },
      { type: 'grammar', grammarId: 'g4', text: 'に' },
      { type: 'text', text: '行きます。電車' },
      { type: 'grammar', grammarId: 'g5', text: 'で' },
      { type: 'text', text: '30分かかります。\n\n昼ごはんは友達と食堂' },
      { type: 'grammar', grammarId: 'g5', text: 'で' },
      { type: 'text', text: '食べます。午後は図書館' },
      { type: 'grammar', grammarId: 'g5', text: 'で' },
      { type: 'text', text: '勉強します。\n\n先生に「宿題' },
      { type: 'grammar', grammarId: 'g3', text: 'を' },
      { type: 'text', text: '忘れないで' },
      { type: 'grammar', grammarId: 'g10', text: 'ください' },
      { type: 'text', text: '」と言われました。夜は家' },
      { type: 'grammar', grammarId: 'g5', text: 'で' },
      { type: 'text', text: '宿題をして、10時に寝ます。' }
    ]
  }
];

// ===== Storage（支援 Supabase 雲端 + localStorage 離線備援）=====
const Storage = {
  // 記憶體快取，讓所有讀取保持同步（不需改動頁面其他程式碼）
  _cache: { vocab: null, grammar: null, readings: null },

  // ── 讀取（同步，從快取）──
  getVocab()    { return this._cache.vocab    ?? DEFAULT_VOCAB; },
  getGrammar()  { return this._cache.grammar  ?? DEFAULT_GRAMMAR; },
  getReadings() { return this._cache.readings ?? DEFAULT_READINGS; },

  // ── 寫入（同步更新快取 + localStorage + 非同步推送到 Supabase）──
  saveVocab(d)    { this._save('vocab',    'jp_vocab',    d); },
  saveGrammar(d)  { this._save('grammar',  'jp_grammar',  d); },
  saveReadings(d) { this._save('readings', 'jp_readings', d); },

  _save(cacheKey, lsKey, data) {
    this._cache[cacheKey] = data;
    localStorage.setItem(lsKey, JSON.stringify(data)); // 離線備援
    this._pushToSupabase(cacheKey, data);              // 非同步，不阻塞 UI
  },

  async _pushToSupabase(table, items) {
    if (typeof db === 'undefined') return;
    const rows = items.map(item => ({ id: item.id, data: item }));
    await db.from(table).upsert(rows, { onConflict: 'id' });

    const currentIds = items.map(i => i.id);
    if (currentIds.length > 0) {
      await db.from(table)
        .delete()
        .not('id', 'in', `(${currentIds.map(id => `"${id}"`).join(',')})`);
    } else {
      await db.from(table).delete().gte('id', '');
    }
  },

  // ── 從 Supabase 載入（頁面啟動時呼叫一次）──
  async loadFromCloud() {
    if (typeof db === 'undefined') {
      this._cache.vocab    = this._fromLS('jp_vocab');
      this._cache.grammar  = this._fromLS('jp_grammar');
      this._cache.readings = this._fromLS('jp_readings');
      return false;
    }

    const [v, g, r] = await Promise.all([
      db.from('vocab').select('data'),
      db.from('grammar').select('data'),
      db.from('readings').select('data'),
    ]);

    this._cache.vocab    = v.data ? v.data.map(row => row.data) : this._fromLS('jp_vocab');
    this._cache.grammar  = g.data ? g.data.map(row => row.data) : this._fromLS('jp_grammar');
    this._cache.readings = r.data ? r.data.map(row => row.data) : this._fromLS('jp_readings');
    return true;
  },

  _fromLS(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return [];
      const data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch { return []; }
  },

  resetAll() {},

  genId(prefix) {
    return prefix + Date.now() + Math.random().toString(36).substr(2, 5);
  }
};

// ===== Utility =====
const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];
const POS_LIST = ['名詞', '動詞（う動詞）', '動詞（る動詞）', '動詞（サ変）', '動詞（カ変）', 'い形容詞', 'な形容詞', '副詞', '接続詞', '助詞', '接頭語', '接尾語', '感動詞', '人稱代名詞','指示代名詞','代名詞', '数詞'];

function getLevelClass(level) {
  return 'badge-' + level.toLowerCase();
}

function showToast(msg, type = '') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast' + (type ? ' ' + type : '');
  toast.textContent = msg;
  container.appendChild(toast);
  requestAnimationFrame(() => { toast.classList.add('show'); });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
