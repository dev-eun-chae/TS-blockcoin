class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
        {
        }
    }
}
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (!this.words[word.term]) {
            this.words[word.term] = word.def;
        }
        else
            console.log('이미 등록된 단어입니다.');
    }
    get(word) {
        if (this.words[word.term]) {
            return console.log(word.def);
        }
    }
    delete(word) {
        if (this.words[word.term]) {
            delete this.words[word.term];
            console.log(`${word.term}이 삭제되었습니다.`);
        }
        else
            console.log('등록되지 않은 단어입니다.');
    }
    update(word, newDef) {
        if (this.words[word.term]) {
            this.words[word.term] = newDef;
            console.log('업데이트 되었습니다.');
        }
        else
            console.log('등록되지 않은 단어입니다.');
    }
    count() {
        return console.log(`등록된 단어의 갯수는? : ${Object.keys(this.words).length}`);
    }
    showAll() {
        return console.log(this.words);
    }
}
const Strawberry_Latte = new Word('딸기라떼', '달콤한 딸기와 우유를 섞었어요');
const shrimp_bugger = new Word('새우버거', '통통한 새우가 통째로 들었어요');
const mintChocolate = new Word('민트초코렛', '차갑게 먹어야 더 맛있어요');
const dict = new Dict();
dict.add(Strawberry_Latte);
dict.add(shrimp_bugger);
dict.add(mintChocolate);
dict.showAll();
dict.count();
dict.delete(mintChocolate);
dict.showAll();
dict.count();
dict.update(shrimp_bugger, '통통한 새우 10마리가 들었어요.');
dict.showAll();
dict.get(shrimp_bugger);
dict.count();
