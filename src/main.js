const test = () => {
    console.log("test");
};
class Test {
    static isTest = true;
    test = test;
}
window.test = Test;
