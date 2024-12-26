export function Tabs(props) {
    const { todos } = props

    const tabs = ['All', 'Open', 'Completed']

    return (
        <nav className= "flex justify-center items-center space-x-4 my-4 bg-gray-100 p-4 rounded-lg shadow-md">
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' ?
                    todos.length :
                    tab === 'Open' ?
                    todos.filter(val => !val.complete).
                    length : 
                    todos.filter(val => val.complete).length

                return (
                    <button key={tabIndex} 
                    className="px-4 py-2 bg-gray-200 hover:bg-blue-500 text-gray-700 hover:text-white font-semibold rounded-lg shadow-md transition-all duration-200">
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}