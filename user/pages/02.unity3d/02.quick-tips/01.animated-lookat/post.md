---
title: 'Animated LookAt rotation'
image: unity3d.jpg
metadata:
    keywords: 'transform,lookat,smooth,lerp,rotation'
    description: 'Animated LookAt in Unity3D'
taxonomy:
    tag: unity3d-quicktip
visible: true
---

Animate the transform's look rotation

===

# Animated LookAt rotation

It's a pity, that the transform.LookAt() function has no possibility to animate the rotation.

So, we need to create such a functionality ourselves.

To do that, we need a speed variable, i set it to 12, because i find, this is a proper value. And we need a look target.
``` csharp
    float rotationSpeed = 12f;
    Transform lookTarget;
```

Next, we need a Rotate function, in which we get the direction vector, then we check, if we have a direction, if not, we do nothing. Next, we create the look rotation to the direction. And last, we lerp the rotation of transform.
``` csharp
    void Rotate() {
        Vector3 direction = lookTarget.position - transform.position;

        if(direction == Vector3.zero)
            return;

        Quaternion rotation = Quaternion.LookRotation(direction);

        transform.rotation = Quaternion.Slerp(transform.rotation, rotation, rotationSpeed * Time.deltaTime);
    }
```

Now, we can call the Rotate function in the Update function.
``` csharp
    void Update(){
        Rotate();
    }
```