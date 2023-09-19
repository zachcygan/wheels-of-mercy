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
        <ul role="list" className="divide-y divide-gray-200 mt-5">
            {items.map((item) => (
                <li key={item.id} className="py-4 hover:scale-105 bg-white rounded-md">
                    {/* Your content */}
                    <div className="text-left p-1">
                        <h3 className="text-xl text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-gray-500">{item.body}</p>                    
                    </div>
                </li>
            ))}
        </ul>
    )
}