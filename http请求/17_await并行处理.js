/* await并行处理
    当有多个promise 需要用await进行处理时 ，如果一个一个来 需要等待上一个promise处理完成之后才能处理下一个
    如果这些个promise之间就没有依赖关系则会非常耗时 
    因此可以利用并行处理 让他们同时开始处理

方法：
    1， 先调用 再await
    2，用Promise.all()处理

*/

async function p1(){
    return new Promise(resolve=>{
        setTimeout(_=>{
            resolve('111')
        },2000)
    })
}

async function p2(){
    return new Promise(resolve=>{
        setTimeout(_=>{
            resolve('222')
        },2000)
    })
}

async function parall(){
    let beginTime = +new Date();
    // 以下方法总共耗时4s
    // let p11 = await p1();
    // console.log(p11);
    // let p22 = await p2();
    // console.log(p22);
    
    //以下方法总共耗时2s
    // let p11 = p1();
    // let p22 = p2();
    // console.log(await p11);
    // console.log(await p22);

    // 以下方法耗时2s
    Promise.all([p1(),p2()]).then(res=>{
        let endTime = +new Date()
        console.log(res);
        console.log( endTime-beginTime );
    })

}
parall()