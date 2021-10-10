export const projectService={
    query
}

const projects=[
    {
        id: 'p110',
        liveDemo: 'https://damari-trello.herokuapp.com/#/',
        repo:'https://github.com/ordamari/trello',
        title: 'Trello',
        description: 'Trello clone',
        createAt: '06/10/21',
        imgUrl: 'https://res.cloudinary.com/dif8yy3on/image/upload/v1633879616/zeqogchssig7s2ddoqhi.jpg',
        technologies: ['React-Redux','MongoDB']
      },
    {
        id: 'p109',
        liveDemo: 'https://whatsupp-react.herokuapp.com',
        repo:'https://github.com/ordamari/whatsUpp',
        title: 'WhatsUpp',
        description: 'WhatsApp clone',
        createAt: '11/05/21',
        imgUrl: 'https://res.cloudinary.com/dif8yy3on/image/upload/v1633879140/w1mowbrbjgjyz2rgnwhf.jpg',
        technologies: ['Socket.IO','PWA']
      },
      {
        id: 'p108',
        liveDemo: 'https://netfliy.herokuapp.com',
        repo:'https://github.com/ordamari/netfliy',
        title: 'Netfliy',
        description: 'Netflix clone',
        createAt: '10/03/21',
        imgUrl: 'https://res.cloudinary.com/dif8yy3on/image/upload/v1615376871/gdaugtubodtekbuygrtj.jpg',
        technologies: ['Styled-Components','Firebase']
      },
      {
        id: 'p102',
        liveDemo: 'https://quiz-upp.herokuapp.com',
        title: 'Quiz-up',
        repo:'https://github.com/NadavSamuel/Quiz-up',
        description: 'Alternative way to build and share quizes. In addition, you can compete with your friends on existing ones',
        imgUrl: 'https://res.cloudinary.com/dif8yy3on/image/upload/v1601908789/z7xtpekxpjdipalyzxak.jpg',
        createAt: '30/09/20',
        technologies: ['React-Redux','Socket.IO', 'MongoDB']
      },
]

function query(){
    return projects
}