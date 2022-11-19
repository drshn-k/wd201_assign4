const todoList = () => {
  let all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {

    const overd = all.filter((todo) => todo.dueDate < today);

    return overd;

  }

  const dueToday = () => {

    const duet = all.filter((todo) => todo.dueDate == today);

    return duet;

  }



  const dueLater = () => {

    const dueL = all.filter((todo) => todo.dueDate > today)
    return dueL;
  }

  const toDisplayableList = (list) => {


    // return  list

    const final_list = list.map(
      (todo) => `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${todo.dueDate == today ? "" : todo.dueDate
        }`
    )
      .join("\n");

    return final_list;
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

module.exports = todoList;

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")