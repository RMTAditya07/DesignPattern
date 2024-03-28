We have two concrete implementations of the Color interface: GreenColor and RedColor. These classes define the specific behavior of applying color, where GreenColor applies green color and RedColor applies red color.

The Color interface defines the contract for applying color, with a single method applyColor().

We have an abstract class Shape, which represents a geometric shape. This class serves as the abstraction in the Bridge pattern.

The Shape class has a composition relationship with the Color interface. It contains a reference to a Color object, allowing shapes to be associated with different colors dynamically.

The constructor of the Shape class takes a Color object as input, allowing the color to be set during the creation of a shape. This follows the constructor injection principle.

The Shape class declares an abstract method applyColor(), which represents the operation of applying color to the shape. This method will be implemented by concrete subclasses of Shape.

We have concrete shape classes Triangle and Pentagon, both of which extend the Shape class. These classes represent specific types of shapes.

Each concrete shape class (Triangle and Pentagon) implements the applyColor() method by invoking the applyColor() method of the associated Color object. This allows shapes to apply color without knowing the specific details of color implementation.

In the Main class, we create instances of Triangle and Pentagon, passing concrete color objects (RedColor and GreenColor) during instantiation. This demonstrates how shapes can be associated with different colors dynamically.

When we call the applyColor() method on each shape object, it prints a message indicating the shape filled with the specified color.

The bridge is formed by the interaction between the Shape abstraction and the Color implementation. 
The Shape abstraction relies on the Color interface to apply color to shapes, but it does not depend on specific implementations of color.
Through constructor injection, concrete instances of shapes (Triangle, Pentagon, etc.) are associated with specific implementations of color (RedColor, GreenColor, etc.).
This decouples the abstraction (Shape) from its implementation (Color), allowing them to vary independently. Changes in one do not affect the other.