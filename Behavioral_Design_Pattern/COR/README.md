# Chain of Responsiblity

Chain of Responsibility pattern is a behavioral pattern used to achieve loose coupling in software design.

In this patter, an object is paased to a Successor, and depending on some kind of logic, will or won't be passed onto another successor and processed. 

There can be any number of different successors and successors can be re-processed recursively.

This process of passing objects through multiple successors is called a chain.

The object that is passed between each successor does not know about which successor will handle it. 

It is an independent object that may or may not be processed by a particular successor before being passed onto the next.

## Terminology

- Handler Interface : A common interface for handling and passing objects through each successor.

- Concrete Handler : The class acting as the Successor handling the requests and passing onto the next.

- Client : The application or class that initiates the call to the first concrete handler (successor) in the chain

