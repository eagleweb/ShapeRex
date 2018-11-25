const quiz = [
    {
        id: 1,
        quizname: 'Quiz1',
        questions: [
            {
                idquestions: 1,
                questions: 'How are you',
                variant: [
                    {
                        idvariant: 1,
                        answer: 'Fine'
                    },
                    {
                        idvariant: 2,
                        answer: 'Bad'
                    },
                ],
                rightanswer: 1
            },
            {
                idquestions: 2,
                questions: 'Where do you live',
                variant: [
                    {
                        idvariant: 1,
                        answer: 'Hotel'
                    },
                    {
                        idvariant: 2,
                        answer: 'Home'
                    },
                ],
                rightanswer: 2
            }
        ],
        added: '2015'
    },
    {
        id: 2,
        quizname: 'Quiz2',
        questions: [
            {
                idquestions: 1,
                questions: 'Where are from?',
                variant: [
                    {
                        idvariant: 1,
                        answer: 'New-York'
                    },
                    {
                        idvariant: 2,
                        answer: 'Los-Angels'
                    },
                ],
                rightanswer: 2
            },
            {
                idquestions: 2,
                questions: 'What is your name',
                variant: [
                    {
                        idvariant: 1,
                        answer: 'Slava'
                    },
                    {
                        idvariant: 2,
                        answer: 'Lena'
                    },
                ],
                rightanswer: 1
            }
        ],
        added: '2019'
    }
];

export default quiz;