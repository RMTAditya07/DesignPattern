package WithFlyWeight;

// IconFactory.java
import java.util.HashMap;
import java.util.Map;

public class IconFactory {
    private Map<String, Icon> icons = new HashMap<>();

    public Icon getIcon(String name) {
        if (!icons.containsKey(name)) {
            icons.put(name, new ImageIcon(name));
        }
        return icons.get(name);
    }
}
