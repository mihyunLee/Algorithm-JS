function solution(sizes) {
    let maxSize = [0, 0];
    
    sizes.map(([w, h]) => w < h ? [h, w] : [w, h])
        .forEach(([w, h]) => {
        if(w > maxSize[0]) maxSize[0] = w
        if(h > maxSize[1]) maxSize[1] = h
    });
    
    return maxSize[0] * maxSize[1];
}
