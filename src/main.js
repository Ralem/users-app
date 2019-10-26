const test = () => {
    console.log("test");
};
class Test {
    static isTest = true;
    static test = test;
}
window.test = Test;
