import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';

function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
                        xl:grid-cols-3 xl:max-w-6xl mx-auto'>
            {/* Feed Section */}
            <section className='col-span-2'>
                <Stories />
                <Posts />
            </section>
            {/*Section 2 */}
            <section className="hidden xl:inline-grid">
                <div className="fixed top-20">
                <MiniProfile />
                <Suggestions />
                </div>
            </section>
        </main>
    )
}

export default Feed
