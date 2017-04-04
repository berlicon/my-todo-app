export default class CategoryItem {
  constructor(id, title, children, todos) {
    this.id = id;
    this.title = title;

    this.children = children;
    this.todos = todos;
  }
}
