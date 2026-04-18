const teacherDatabase = {
    "SyntaxError: EOL while scanning string literal": {
        msg: "Wait! You started a speech bubble but didn't close it. Add a \" at the end!",
        mood: "warning",
        action: "point_to_keyboard"
    },
    "NameError": {
        msg: "I don't recognize that word. Is it a Variable? Check Level 3 to see how to name things!",
        mood: "confused",
        action: "show_link"
    },
    "Success": {
        msg: "BOOM! Rocket engines engaged. Perfect code, Cadet!",
        mood: "happy",
        action: "dance"
    }
};

function checkCode(userInput) {
    // 1. Check for the 'x' instead of '*' mistake
    if (userInput.includes(' x ')) {
        updateStickman("Use the Star Power (*) key for math, not the letter 'x'!", "warning");
        return;
    }

    // 2. Check for missing parentheses
    if (userInput.includes('print') && !userInput.includes('(')) {
        updateStickman("The megaphone (print) needs its handles (parentheses) to work!", "warning");
        return;
    }

    // 3. If everything is good
    updateStickman(teacherDatabase.Success.msg, "happy");
}
