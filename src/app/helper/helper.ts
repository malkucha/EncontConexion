export function Helper() {
    return {
        regExName() { return /([a-zA-Z])+/; },

        regExEmail() {
            return /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
        },

        regExPassword() {
            return /^\S*$/;
        },

        completedWithZero(num: any) {
            return ('000000' + parseInt(num)).slice(-6);
        },

        generateCaptcha() {
            return this.completedWithZero(Math.random() * 1000000);
            // (("000000" + parseInt(Math.random() * 1000000)).slice(-6)).toString();
        }
    };
}
