"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchAndDisplayTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
        try {
            const response = yield fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const todo = yield response.json();
            console.log(`\n--- To-Do Details ---`);
            console.log(`To-Do ID: ${todo.id}`);
            console.log(`Title: ${todo.title}`);
            console.log(`Completed: ${todo.completed ? 'Yes' : 'No'}`);
        }
        catch (error) {
            console.error(`Error or processing todo : ${error.message}`);
        }
    });
}
fetchAndDisplayTodo(1);
