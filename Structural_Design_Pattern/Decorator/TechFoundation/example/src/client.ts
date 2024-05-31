// Component: Service
abstract class Service {
  abstract execute(input: string): string;
}

// Concrete Component: ConcreteService
class ConcreteService extends Service {
  execute(input: string): string {
    // Simulate a time-consuming operation
    return `Result of operation with input: ${input} \n ----------------------------------------------------------------`;
  }
}

// Concrete Decorator: CacheDecorator
class CacheDecorator extends Service {
  private service: Service;
  private cache: Map<string, string>;

  constructor(service: Service) {
    super();
    this.service = service;
    this.cache = new Map();
  }

  execute(input: string): string {
    if (this.cache.has(input)) {
      console.log(`Cache hit for input: ${input}`);
      return this.cache.get(input)!;
    } else {
      const result = this.service.execute(input);
      this.cache.set(input, result);
      console.log(`Result cached for input: ${input}`);
      return result;
    }
  }
}

// Concrete Decorator: LogDecorator
class LogDecorator extends Service {
  private service: Service;

  constructor(service: Service) {
    super();
    this.service = service;
  }

  execute(input: string): string {
    console.log(`Operation called with input: ${input}`);
    return this.service.execute(input);
  }
}

// Creating instances
const service = new ConcreteService();
const cachedService = new CacheDecorator(service);
const loggedAndCachedService = new LogDecorator(cachedService);

console.log(loggedAndCachedService.execute("input1")); // Logs operation with input and caches the result
console.log(loggedAndCachedService.execute("input2")); // Logs operation with input and caches the result
console.log(loggedAndCachedService.execute("input1")); // Logs cache hit for input1 and returns the cached result
console.log(loggedAndCachedService.execute("input3")); // Logs operation with input and caches the result
