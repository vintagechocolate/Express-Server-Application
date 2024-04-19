// Task model
class Task {
    constructor(id, title, description, category, status) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.category = category;
      this.status = status;
    }
  }
    
module.exports = Task;
