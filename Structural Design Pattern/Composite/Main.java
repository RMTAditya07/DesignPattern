import java.util.NoSuchElementException;

// Client
public class Main {
    public static void main(String[] args) {

        // ?create new simple tasks
        Task simpleTask1 = new SimpleTask("Complete Coding");
        Task simpleTask2 = new SimpleTask("Write Documentation");
        Task simpleTask3 = new SimpleTask("Test Code");

        // ?create a task list
        TaskList projectTasks = new TaskList("Project Tasks");

        // ?add tasks to the task list
        projectTasks.addTask(simpleTask1);
        projectTasks.addTask(simpleTask2);
        projectTasks.addTask(simpleTask3);

        // ?create a nested task list
        TaskList phase1Tasks = new TaskList("Phase 1 Tasks");

        // ?add tasks to the nested task list
        Task simpleTask4 = new SimpleTask("Design");
        phase1Tasks.addTask(simpleTask4);
        phase1Tasks.addTask(new SimpleTask("Implementation"));
        phase1Tasks.addTask(new SimpleTask("Deployment"));

        TaskList phase1_1Tasks = new TaskList("Phase 1.1 Tasks");
        phase1_1Tasks.addTask(new SimpleTask("Phase 1.1 task1"));
        phase1_1Tasks.addTask(new SimpleTask("Phase 1.1 task2"));
        phase1_1Tasks.addTask(new SimpleTask("Phase 1.1 task3"));
        
        phase1Tasks.addTask(phase1_1Tasks);
        
        // ?add the nested task list to the task list
        projectTasks.addTask(phase1Tasks);
        
        // ? Display original tasks
        System.out.println("Original tasks:");
        projectTasks.display();
        System.out.println("----------------------------------------------------");

        // ? Remove a task by its title and display
        try {
            projectTasks.removeTaskByTitle("Phase 1.1 task2");
            // ? Display modified tasks
            System.out.println("Tasks after removing 'Phase 1.1 task2':");
            projectTasks.display();
            System.out.println("----------------------------------------------------");

        } catch (NoSuchElementException e) {
            System.out.println("Error: " + e.getMessage());
        }

    }
}
