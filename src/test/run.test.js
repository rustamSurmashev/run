import {calculateRun} from "../js/run.js";
test ('should show run', () =>{

    let result = calculateRun(10, 100);

    expect(result).toBe(1000);
});