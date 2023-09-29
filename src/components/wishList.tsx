import { Roboto } from 'next/font/google'

const robotoFont = Roboto({
    subsets: ['latin'],
    weight: '700'
})

const items = [
    {
        id: 1,
        title: 'Warehouse Space',
        body: 'Key to our mission is at-will access to warehouse space where we can drop off, repair, and pick up wheelchairs. Because volunteers come with varied schedules we need early morning through late night access. We seek 5,000 to 10,000 square feet.'
    },
    {
        id: 2,
        title: 'Shipping Coordinator',
        body: 'Looking for someone with shipping and logistics experience who can secure cooperative shipping agreements to move donated chairs from around the country to our warehouse.'
    }
    // More items...
]

export default function WishList() {
    return (
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-900 mt-5">
            {items.map((item) => (
                <li key={item.id} className="py-4 bg-white dark:bg-zinc-900 rounded-md">
                    <div className="text-left p-1">
                        <h3 className={`text-xl font-bold text-black dark:text-dark ${robotoFont.className}`}>{item.title}</h3>
                        <p className="mt-2 text-black dark:text-dark2">{item.body}</p>                    
                    </div>
                </li>
            ))}
        </ul>
    )
}