function breakingRecords(scores) {
    let max = scores[0]
    let min = scores[0]
    let scores_max = 0
    let scores_min = 0
    for (let i=1; i<scores.length; i++) {
        if (scores[i]>scores[i-1] && scores[i]>max) {
            max = scores[i]
            scores_max++
        }
        if (scores[i]<scores[i-1] && scores[i]<min) {
            min = scores[i]
            scores_min++
        }
    }
    return [scores_max, scores_min]
}
