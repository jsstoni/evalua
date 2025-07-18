'use client';

import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import UnderlineExtension from '@tiptap/extension-underline';
import {
  EditorContent,
  type Editor as EditorTiptap,
  useEditor,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  type LucideIcon,
  Quote,
  Redo,
  Underline,
  Undo,
} from 'lucide-react';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { HoverInfo } from '@/components/hover-info';
import { Button } from '@/components/ui/button';
import type { MakeForm } from '@/lib/schema';
import { cn } from '@/lib/utils';

type EditBar = { editor: EditorTiptap | null };

type BottomCommand =
  | {
      id: string;
      title?: string;
      icon: LucideIcon;
      run: () => void;
      isActive: () => boolean;
    }
  | { separator?: boolean; name: string };

function textCommands(editor: EditorTiptap): BottomCommand[] {
  return [
    {
      id: 'italic',
      title: 'Cursiva',
      icon: Italic,
      run: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic'),
    },
    {
      id: 'bold',
      title: 'Negrita',
      icon: Bold,
      run: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
    },
    {
      id: 'underline',
      title: 'Subrayar',
      icon: Underline,
      run: () => editor.chain().focus().toggleUnderline().run(),
      isActive: () => editor.isActive('underline'),
    },
    { separator: true, name: 'ibu' },
  ];
}

function EditorBar({ editor }: EditBar) {
  if (!editor) {
    return null;
  }

  const commands: BottomCommand[] = [
    {
      id: 'undo',
      title: 'Deshacer',
      icon: Undo,
      run: () => editor.chain().focus().undo().run(),
      isActive: () => editor.isActive('undo'),
    },
    {
      id: 'redo',
      title: 'Rehacer',
      icon: Redo,
      run: () => editor.chain().focus().redo().run(),
      isActive: () => editor.isActive('redo'),
    },
    { separator: true, name: '' },
    ...textCommands(editor),
    {
      id: 'left',
      title: 'A la izquierda',
      icon: AlignLeft,
      run: () => editor.chain().focus().toggleTextAlign('left').run(),
      isActive: () => editor.isActive({ textAlign: 'left' }),
    },
    {
      id: 'center',
      title: 'Centrado',
      icon: AlignCenter,
      run: () => editor.chain().focus().toggleTextAlign('center').run(),
      isActive: () => editor.isActive({ textAlign: 'center' }),
    },
    {
      id: 'right',
      title: 'A la derecha',
      icon: AlignRight,
      run: () => editor.chain().focus().toggleTextAlign('right').run(),
      isActive: () => editor.isActive({ textAlign: 'right' }),
    },
    {
      id: 'justify',
      title: 'Justificar',
      icon: AlignJustify,
      run: () => editor.chain().focus().toggleTextAlign('justify').run(),
      isActive: () => editor.isActive({ textAlign: 'justify' }),
    },
    { separator: true, name: 'lcrj' },
    {
      id: 'blockquote',
      title: 'Cita',
      icon: Quote,
      run: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive('blockquote'),
    },
    { separator: true, name: 'b' },
    {
      id: 'bulletList',
      title: 'Lista con viñetas',
      icon: List,
      run: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive('bulletList'),
    },
    {
      id: 'orderedList',
      title: 'Lista numerada',
      icon: ListOrdered,
      run: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive('orderedList'),
    },
  ];

  return <Menu commands={commands} />;
}

function Menu({ commands }: { commands: BottomCommand[] }) {
  return (
    <div className="flex items-center gap-px border-y p-1">
      {commands.map((command) => {
        if ('separator' in command && command.separator) {
          return <div className="mx-2 h-6 w-px bg-input" key={command.name} />;
        }
        if ('id' in command) {
          return (
            <HoverInfo title={command.title || ''} key={command.id}>
              <Button
                className={cn(command.isActive() && 'bg-muted')}
                type="button"
                variant="ghost"
                onClick={command.run}
              >
                <command.icon size={18} />
              </Button>
            </HoverInfo>
          );
        }
        return null;
      })}
    </div>
  );
}

export const Editor = () => {
  const { setValue, watch } = useFormContext<MakeForm>();

  const editor = useEditor({
    extensions: [
      StarterKit,
      UnderlineExtension,
      Placeholder.configure({
        placeholder: 'Escribe',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    editorProps: {
      attributes: {
        class: 'focus:outline-none min-h-30',
      },
    },
    content: '',
    onUpdate: ({ editor }) => {
      setValue('content', editor.getHTML());
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'content' && editor && value.content !== editor.getHTML()) {
        editor.commands.setContent(value.content || '');
      }
    });

    return () => subscription.unsubscribe();
  }, [editor, watch]);

  return (
    <>
      <EditorBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
