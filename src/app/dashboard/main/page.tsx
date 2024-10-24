import { WidgetGrid } from "@/app/components/WidgetGrid";


export const metadata = {
 title: 'Main Dashboard',
 description: 'Main Dashboard',
};

export default function MainPage() {
return (
<div className="text-black p-3">
    <h1 className="text-center text-3xl mt-5 text-green-400">Dashboard: 
    <span className="text-2xl text-green-600">Información General</span>
    </h1>

    <WidgetGrid/>
</div>
)
}
