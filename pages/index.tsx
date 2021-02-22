import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="The Healthy, Hunger-Free Kids">
    <div className="text-center">
      <div>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
    <div>
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
    </div>
    <div>
      <Link href="/admin">
        <a>Admin Panel</a>
      </Link>
    </div>
    </div>
  </Layout>
)

export default IndexPage
