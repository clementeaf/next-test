import Authentication from './authentication/page'
import Main from './main/page';
import usePageStore from '@/store/pageStore';

export default function Home() {
  const { page } = usePageStore(({ page }) => ({page}));
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24 gap-6"'>
      {page ? <Authentication /> : <Main />}
    </div>
  )
}
