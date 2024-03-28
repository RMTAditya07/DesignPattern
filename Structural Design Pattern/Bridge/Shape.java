public abstract class Shape {
	//Composition - implementor
	//reference to a Color object
	// allowing shapes to be associated with different colors dynamically.
	// The Shape class has a composition relationship with the Color interface. 
	// This means that it holds a reference to an object of type Color. 
	// This reference is stored in the color attribute of the Shape class.
	protected Color color; 
	
	//constructor with implementor as input argument
	// allowing the color to be set during the creation of a shape.
	public Shape(Color c){
		this.color=c;
	}
	// This method will be implemented by concrete subclasses of Shape.
	// The Shape class delegates the responsibility of applying color to the associated Color object through its applyColortoShape() method.
	abstract public void applyColortoShape();
}