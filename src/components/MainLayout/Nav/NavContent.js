import { v4 as uuidv4 } from 'uuid';
import Filter from '../../DemoComponents/FitlerComponentDemo/filter/Filter';

export const _navContent = [
    {
        id: uuidv4(),
        title: 'reactjs',
        data: [
            {
                itemId: 1, 
                item: 'Component Lesson',
                path: '',
                content: '',
                pathId: uuidv4()
            }, 
            {
                itemId: 2,
                item: 'How to use Hook ?',
                path: '',
                content: '',
                pathId: uuidv4()
            },
            {
                itemId: 3, 
                item: 'Demo - useState',
                path: '',
                content: '',
                pathId: uuidv4()
            }, 
            {
                itemId: 4, 
                item: `Demo - Filter`,
                path: '',
                content: (<Filter/>),
                pathId: uuidv4()
            }
        ]
    }, 
    {
        id: uuidv4(),
        title: 'Business Analyst',
        data: [
            {
                itemId: 1, 
                item: 'What is Business Analyst ? ',
                path: '',
                content: '',
                pathId: uuidv4()
            }, 
            {
                itemId: 2,
                item: 'Use powerful tools in role Business Analyst',
                path: '',
                content: '',
                pathId: uuidv4()
            }, 
            {
                itemId: 3,
                item: 'BABOK 1: How to use this book?',
                path: '',
                content: '',
                pathId: uuidv4()
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'My Story',
        data: [
            {
                itemId: 1, 
                item: 'What happen today ',
                path: '',
                content: '',
                pathId: uuidv4()
            }, 
            {
                itemId: 2,
                item: 'Yeah Yeah',
                path: '',
                content: '',
                pathId: uuidv4()
            }, 
            {
                itemId: 3,
                item: 'How can I get my milestone ',
                path: '',
                content: (<p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
              </p>),
                pathId: uuidv4()
            }
        ]
    }
]