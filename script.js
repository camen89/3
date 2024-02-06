const story = `
ある小さな村に住む少年、ユウキは、常に冒険心と好奇心に満ちた心を持っていました。彼の家は青々と茂った森に囲まれており、毎日のように彼はその奥深い森へと冒険に出かけていました。ある日、ユウキは村の伝説について聞きました。それは、森の奥深くに古代の宝物が眠っているというものでした。ユウキはすぐにその宝物を求めて旅立つ決心をしました。
彼は古い地図と羊皮紙を持ち、冒険の旅に出発しました。彼の旅は危険と興奮に満ちたものでした。彼は荒れた山脈を越え、広大な草原を歩き、深い森を探索しました。彼は時には危険な動物と遭遇し、時には自然の障害に立ち向かいましたが、彼の決意は揺るがず、彼は進み続けました。
数週間の旅の末、ユウキは地図に示された場所に到着しました。そこには古代の遺跡がそびえ立ち、その中に宝物が隠されていることが示唆されていました。彼は遺跡の入り口に立ち、ドアを開けることに決めました。しかし、ドアは重い岩で塞がれており、ユウキは手詰まりになりました。
しかし、彼は決してあきらめませんでした。代わりに、彼は遺跡の周りを探索し、別の入り口を見つけました。彼はその入り口を開き、遺跡の中に入りました。そこには古代の宝物が眠っているかのような静けさがありました。
ユウキは遺跡の中を探検し、古代の財宝を見つけました。それは黄金の宝石で彩られた宝箱であり、彼の目が見た中で最も美しいものでした。彼はその宝箱を持ち上げ、感謝の気持ちでいっぱいになりました。
しかし、そのとき、遺跡の中で何かが動き始めました。古代の罠が作動し、ユウキは閉じ込められてしまいました。彼は恐怖に震えながらも、冷静さを失わず、自分を解放する方法を探しました。
数時間後、ユウキは巧みな策略を用いて罠から逃れました。彼は宝箱を持ち、遺跡を出ると、新たな冒険を始めることを決意しました。彼は村に戻り、彼の冒険の物語を語り継ぎ、未知の地への探求心を持つ人々を魅了しました。そして、ユウキは新たな冒険の旅に出発し、次の宝物を求めて世界を旅しました。
`;

// 文章を読点で区切って配列に格納する
const textOptions = story.split(/[。]/).filter(sentence => sentence.trim().length > 0);

function displayRandomText(){
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    document.getElementById('randomText').textContent = textOptions[randomIndex];
}

displayRandomText();

setInterval(displayRandomText, 8000);


// 結果を表示
console.log(textOptions[23]);

