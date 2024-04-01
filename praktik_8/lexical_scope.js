function fungsiLuar(){
    const nama = "Rizky"
    function fungsiDalam (){
        console.log(nama);

        function dalam2(){
            console.log(nama, `fungsi dalam2`)
            hello()
        }
        dalam2()
    }
    fungsiDalam()
}
fungsiLuar()