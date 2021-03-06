import React, {Component} from 'react';
import gabrielProfileImage from '../assets/gabriel.png';
import claraProfileImage from '../assets/clara.png';
import cezarProfileImage from '../assets/cezar.png';
import diegoProfileImage from '../assets/diego.png';
import julioProfileImage from '../assets/julio.png';
import Post from './Post';
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: julioProfileImage
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: diegoProfileImage
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: gabrielProfileImage
        },
        date: '04 Jun 2019',
        content: 'Fala galera, beleza\n Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: claraProfileImage
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: 'Cézar Toledo',
              avatar: cezarProfileImage
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          },

        ],
      },
      
    ]
  };

  render(){
    const {posts} = this.state;
    return (
      <div id="post-list">
        {posts.map(post => <Post key={post.id} data={post}/>)}
      </div>
    );
  }
}

export default PostList;