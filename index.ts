
const problems = [
    {
        name: 'prob1',
        skills: ['add-decimals']
    },
    {
        name: 'prob2',
        skills: ['add-decimals', 'multiply-decimals']
    },
    {
        name: 'prob3',
        skills: ['add-fractions'],
    },
    {
        name: 'prob4',
        skills: ['add-fractions', 'multiply-fractions']
    },
    {
        name: 'prob5',
        skills: ['multiply-decimals', 'multiply-fractions']
    },
    {
        name: 'prob6',
        skills: ['add-fractions', 'add-decimals']
    },

]
const students = {
    a: { // expected prob4
        'add-decimals': 97,
        'add-fractions': 17,
        'multiply-fractions': 53
    },
    b: { // expected prob2 or prob5
        'add-fractions': 96,
        'multiply-fractions': 81,
        'add-decimals': 33,
        'multiply-decimals': 47
    },
    c: { // expected prob3, prob4 or prob6
        'add-fractions': 23,
    },

}

// get student skills that are lower than 95%
function getSkillsNeedImprovment(student: any): string[] {
    const skillsNeedImprovment = []
    for (let each in student) {
        if (student[each] < 95) {
            skillsNeedImprovment.push(each)
        }
    }
    return skillsNeedImprovment
}

// select the problem from filtered student skills
function selectProblem(student: any): string {
    const filteredSkills = getSkillsNeedImprovment(student)

    let problemName = 'Non assigned, Please try again'

    problems.forEach(prob => {
        if (filteredSkills.length > 2) {
            filteredSkills.forEach(skill => {
                const testArr = filteredSkills.filter(each => each !== skill)
                if (arraysEqual(testArr, prob.skills)) {
                    problemName = prob.name
                    return problemName
                }
            })
        }
        if (arraysEqual(filteredSkills, prob.skills)) {
            problemName = prob.name
            return problemName
        }
    })

    return problemName
}

// check which problem skill matches the filtered skills
function arraysEqual(a: string[], b: string[]) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log('Problems', problems);
console.log('Students', students);
console.log('****Student A', selectProblem(students.a));
console.log('****Student B', selectProblem(students.b));
console.log('****Student C', selectProblem(students.c));
