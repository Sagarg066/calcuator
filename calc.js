let result = document.getElementById("inputext");

let calculate=(num)=>{
    result.value += num;
}

let Result = () => {
    try {
        let evaluationResult = eval(result.value);

        if (evaluationResult !== undefined) {
            result.value = evaluationResult;
        } else {
            result.value = "0";
        }

    } catch (err) {
        alert("Invalid Entry");
    }
}

let clr=()=>{
    result.value = " ";
}

let Del=()=>{
    result.value = result.value.slice(0,-1);
}