// Leaf
class SimpleTask implements Task {
    private String title;

    public SimpleTask(String title) {
        this.title = title;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public void display() {
        System.out.println("Simple Task: " + title);
    }
}