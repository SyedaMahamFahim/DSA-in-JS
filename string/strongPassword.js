function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const containsDigit = (password.match(/[0-9]/) || []).length > 0;
    const containsLower = (password.match(/[a-z]/) || []).length > 0;
    const containsUpper = (password.match(/[A-Z]/) || []).length > 0;
    const containsSpecial = (password.match(/[!@#$%^&*\(\)\-+]/) || []).length > 0;

    const needChars = !containsDigit + !containsLower + !containsUpper + !containsSpecial;
    // console.log(needChars)
    const need2 = Math.max(0, n);
    // console.log(need2)
    return Math.max(need2, needChars);
}

console.log(minimumNumber(3, "abh"))