import {
    addTodolistAC,
    changeTodolistAC,
    changeTodolistFilterAC,
    removeTodolistAC,
    todolistsReducer
} from './todolistReducer';
import {v1} from 'uuid';
import {FiltrType, TodolistType} from '../App';

test('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "All"},
        {id: todolistId2, title: "What to buy", filter: "All"}
    ]

    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1));
    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});
test('correct todolist should be add', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newTodolistTitle = 'kubgiu';

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "All"},
        {id: todolistId2, title: "What to buy", filter: "All"}
    ]

    const endState = todolistsReducer(startState, addTodolistAC(newTodolistTitle))
    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
    expect(endState[2].filter).toBe('All');
});

test('correct todolist should change its name', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newTodolistTitle: string = "New Todolist";
    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "All"},
        {id: todolistId2, title: "What to buy", filter: "All"}
    ]
    const endState = todolistsReducer(startState, changeTodolistAC(todolistId2, newTodolistTitle));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newFilter: FiltrType = "Completed";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "All"},
        {id: todolistId2, title: "What to buy", filter: "All"}
    ]

    const action = {
        type: 'CHANGE-TODOLIST-FILTER',
        id: todolistId2,
        filter: newFilter
    };

    const endState = todolistsReducer(startState, changeTodolistFilterAC(todolistId2, newFilter));

    expect(endState[0].filter).toBe("All");
    expect(endState[1].filter).toBe(newFilter);
});

