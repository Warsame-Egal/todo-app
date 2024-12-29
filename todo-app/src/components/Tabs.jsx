export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props

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
                    <button onClick={() => { 
                        setSelectedTab(tab)
                    }}
                    key={tabIndex}
                    className={"tab-button " + (tab === selectedTab ? ' tab-selected' : ' ')}>
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
            <hr></hr>
        </nav>
    )
}