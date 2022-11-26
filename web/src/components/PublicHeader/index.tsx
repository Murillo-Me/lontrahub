import logo from '@/assets/images/logo-128.png';

export function PublicHeader() {
    return (
        <div className="w-full bg-darkteal h-header-height flex items-center px-10">
            <div className="flex items-end">
                <img
                    className="h-20"
                    src={logo}
                    alt="The LontraHub logo: a stylized otter"
                />
                <h1 className="my-0 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                    LontraHub
                </h1>
            </div>
        </div>
    );
}
