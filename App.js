const parents = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', { id: 'subChild1' }, 'It is a h1 tag from child-1'),
        React.createElement('h2',{id:'subChild2'},'It is a h2 tag from child-1')
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {id:'sub-child1'}, "It is a h1 tag from child-2"),
        React.createElement('h2',{id:'sub-child2'},"It is a h2 tag from child-2")
    ])
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parents);