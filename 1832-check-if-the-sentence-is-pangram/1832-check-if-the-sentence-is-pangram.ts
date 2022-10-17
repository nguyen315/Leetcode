function checkIfPangram(sentence: string): boolean {
    const mem={}
    for (let i = 97; i <= 122; i++) {
        mem[i]=false
    }
    for (let i = 0; i < sentence.length; i++) {
        mem[sentence.charCodeAt(i)] = true
    }
    for (let i = 97; i <= 122; i++) {
        if (!mem[i])
            return false
    }
    return true;
};