import java.util.NoSuchElementException;
import java.util.ArrayList;
import java.util.List;
// Composite
class TaskList implements Task {
    private String title;
    private List<Task> tasks;

    public TaskList(String title) {
        this.title = title;
        this.tasks = new ArrayList<>();
    }

    @Override
    public String getTitle() {
        return title;
    }

    public void addTask(Task task) {
        tasks.add(task);
    }

    public void removeTaskByTitle(String title) throws NoSuchElementException {
        for (Task task : tasks) {
            if (task.getTitle().equals(title)) {
                tasks.remove(task);
                return; // Exit the method after removing the task
            }
            if (task instanceof TaskList) {
                try {
                    TaskList nestedTaskList = (TaskList) task;
                    nestedTaskList.removeTaskByTitle(title); // Recursively search and remove task in nested task lists
                } catch (NoSuchElementException e) {
                    // Task not found in nested TaskList, continue searching
                    throw new NoSuchElementException("Task with title '" + title + "' not found.");
                }
            }
        }
        
    }

    @Override
    public void display() {
        System.out.println("Task List: " + title);
        for (Task task : tasks) {
            task.display();
        }
    }
}