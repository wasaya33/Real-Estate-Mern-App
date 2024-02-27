import {useSelector} from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt="profile"  className='rounded-full h-24 w-24 object-cover self-center mt-2 cursor-pointer'/>
        <input
        type="text" 
        placeholder='username'
        id='username'
        className='border p-3 rounded-lg' />
         <input
        type="text" 
        placeholder='email'
        id='email'
        className='border p-3 rounded-lg' />
         <input
        type="password" 
        placeholder='password'
        id='password'
        className='border p-3 rounded-lg' />
        <button className='uppercase bg-slate-700 text-white p-3 cursor-pointer hover:opacity-95 disabled:opacity-80 rounded-lg'>update</button>
      </form>
      <div className='mt-5 justify-between flex'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}

export default Profile
