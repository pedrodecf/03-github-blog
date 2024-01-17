import { useContext } from 'react'
import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'
import { PostContext } from '../../context/PostContext'
import { HomeContainer, PostsContainer } from './styles'
import { ThreeDots } from 'react-loader-spinner'

export function Home() {
  const { posts } = useContext(PostContext)
  return (
    <HomeContainer>
      <Profile />
      <SearchBar />

      {Object.keys(posts).length === 0 ? (
        <div className="loadingBar">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#3294F8"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        <PostsContainer>
          {posts.map((post) => {
            return (
              <Post
                key={post.number}
                date={post.created_at}
                description={post.body}
                title={post.title}
                link={post.number?.toString()}
              />
            )
          })}
        </PostsContainer>
      )}
    </HomeContainer>
  )
}
